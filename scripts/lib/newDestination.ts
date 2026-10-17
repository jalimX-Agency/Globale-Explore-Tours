// Builds a complete Destination record (hero, intro, "see and do" / "best of" blocks, the three
// standard "clients loved" blocks, FAQs and two team members) in the same shape as the existing
// destinations, for runSeedBatch({ newDestinations }). The "clients loved" blocks and the three
// generic FAQs are cloned from an existing destination so their copy stays identical site-wide.
// As with seedTripsRunner, the entry script must load .env before dynamically importing this module.
import { PrismaClient } from "@prisma/client";
import type { L3 } from "./circuitBuilders";

export type Block = { title: L3; description: L3; image: string };

export type DestinationInput = {
  slug: string;
  name: L3;
  nameIn: string; // French "en Finlande", "aux îles Féroé"...
  region: { slug: string; name: L3 };
  description: L3;
  descriptionMore: L3;
  heroImage: string;
  order: number;
  seeAndDo: [Block, Block];
  bestOf: [Block, Block];
  lovedImages: [string, string, string];
  bestTime: { question: L3; answer: L3 };
  team: [{ name: string; photo: string }, { name: string; photo: string }];
};

const TEMPLATE_SLUG = "hongrie";

export async function buildDestinations(inputs: DestinationInput[]) {
  const db = new PrismaClient();
  try {
    const tpl = await db.destination.findUniqueOrThrow({
      where: { slug: TEMPLATE_SLUG },
      include: { contentBlocks: { where: { section: "clientLoved" }, orderBy: { order: "asc" } }, faqs: { orderBy: { order: "asc" } } },
    });
    const loved = tpl.contentBlocks;
    const genericFaqs = tpl.faqs.slice(1, 4);

    return inputs.map((d) => {
      const block = (section: string, b: Block, order: number) => ({
        section, order,
        title: b.title[0], titleEn: b.title[1], titleEs: b.title[2],
        description: b.description[0], descriptionEn: b.description[1], descriptionEs: b.description[2],
        image: b.image,
      });
      return {
        slug: d.slug,
        name: d.name[0], nameEn: d.name[1], nameEs: d.name[2],
        region: d.region.name[0], regionEn: d.region.name[1], regionEs: d.region.name[2],
        regionSlug: d.region.slug,
        description: d.description[0], descriptionEn: d.description[1], descriptionEs: d.description[2],
        overviewHeading: `Pourquoi choisir Globale Explore Tours pour votre voyage ${d.nameIn}`,
        overviewHeadingEn: `Why Choose Globale Explore Tours for Your ${d.name[1]} Trip`,
        overviewHeadingEs: `Por qué elegir Globale Explore Tours para su viaje a ${d.name[2]}`,
        descriptionMore: d.descriptionMore[0], descriptionMoreEn: d.descriptionMore[1], descriptionMoreEs: d.descriptionMore[2],
        heroImage: d.heroImage,
        order: d.order,
        featured: true,
        contentBlocks: {
          create: [
            block("seeAndDo", d.seeAndDo[0], 1),
            block("seeAndDo", d.seeAndDo[1], 2),
            block("bestOf", d.bestOf[0], 1),
            block("bestOf", d.bestOf[1], 2),
            ...loved.map((l, i) => ({
              section: "clientLoved", order: l.order,
              title: l.title, titleEn: l.titleEn, titleEs: l.titleEs,
              description: l.description, descriptionEn: l.descriptionEn, descriptionEs: l.descriptionEs,
              image: d.lovedImages[i] ?? l.image,
              ctaLabel: l.ctaLabel, ctaLabelEn: l.ctaLabelEn, ctaLabelEs: l.ctaLabelEs, ctaHref: l.ctaHref,
            })),
          ],
        },
        faqs: {
          create: [
            { order: 1, question: d.bestTime.question[0], questionEn: d.bestTime.question[1], questionEs: d.bestTime.question[2], answer: d.bestTime.answer[0], answerEn: d.bestTime.answer[1], answerEs: d.bestTime.answer[2] },
            ...genericFaqs.map((f, i) => ({
              order: i + 2,
              question: f.question, questionEn: f.questionEn, questionEs: f.questionEs,
              answer: f.answer, answerEn: f.answerEn, answerEs: f.answerEs,
            })),
          ],
        },
        team: {
          create: d.team.map((m, i) => ({
            order: i + 1, name: m.name, photo: m.photo,
            role: i === 0 ? "Spécialiste destination" : "Conseiller voyage",
            roleEn: i === 0 ? "Destination Specialist" : "Travel Advisor",
            roleEs: i === 0 ? "Especialista de destino" : "Asesor de viaje",
          })),
        },
      };
    });
  } finally {
    await db.$disconnect();
  }
}
