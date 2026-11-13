// Side-by-side comparison of a destination's circuits, shown on its destination page to help a
// visitor pick one. Durations and prices come from each trip itself; this only adds the
// trip's format and who it suits, restated from its own itinerary. Keyed by destination slug,
// then trip slug (table order follows this object). Started with Morocco, the sales priority.

type L3 = [fr: string, en: string, es: string];
export type ComparisonRow = { format: L3; highlights: L3; idealFor: L3 };

export const DESTINATION_COMPARISONS: Record<string, Record<string, ComparisonRow>> = {
  maroc: {
    "maroc-circuit-villes-imperiales-8j": {
      format: ["Circuit accompagné", "Guided tour", "Circuito acompañado"],
      highlights: [
        "Marrakech, Rabat, Meknès, Volubilis, Fès",
        "Marrakech, Rabat, Meknes, Volubilis, Fez",
        "Marrakech, Rabat, Mequinez, Volubilis, Fez",
      ],
      idealFor: ["Une première découverte du Maroc", "A first trip to Morocco", "Un primer viaje a Marruecos"],
    },
    "maroc-grand-sud-kasbahs-8j": {
      format: ["Circuit accompagné", "Guided tour", "Circuito acompañado"],
      highlights: [
        "Aït Ben Haddou, gorges du Todra, Tafilalet",
        "Ait Ben Haddou, Todra gorges, Tafilalet",
        "Ait Ben Haddou, gargantas del Todra, Tafilalet",
      ],
      idealFor: ["Les paysages du sud et les kasbahs", "Southern landscapes and kasbahs", "Los paisajes del sur y las kasbas"],
    },
    "maroc-desert-riad-kasbah-5j": {
      format: ["4x4 privatif avec chauffeur", "Private 4x4 with driver", "4x4 privado con conductor"],
      highlights: [
        "Nuit en bivouac à l'Erg Lihoudi, lac Iriki",
        "A night in the Erg Lihoudi dunes, Lake Iriki",
        "Noche en las dunas del Erg Lihoudi, lago Iriki",
      ],
      idealFor: ["Le désert en peu de jours", "The desert in a few days", "El desierto en pocos días"],
    },
    "maroc-fes-chefchaouen-5j": {
      format: ["Petit groupe, véhicule privé", "Small group, private vehicle", "Grupo reducido, vehículo privado"],
      highlights: [
        "Médina de Fès, Chefchaouen la ville bleue",
        "Fez medina, Chefchaouen the blue city",
        "Medina de Fez, Chefchaouen la ciudad azul",
      ],
      idealFor: ["Une escapade culturelle au nord", "A cultural escape in the north", "Una escapada cultural al norte"],
    },
  },
};
