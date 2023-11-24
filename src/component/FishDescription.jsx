const FishDescription = ({ fish_class, match }) => {
    let fish = {};
  
    switch (fish_class) {
      case "acanthaluteres_vittiger":
        fish = {
          name: "Acanthaluteres vittiger",
          alias: "Toothbrush leatherjacket",
          environment: "Marine; demersal; depth range 1 - 40 m",
          distribution:
            "Eastern Indian Ocean: southern Australia, from southern Western Australia to New South Wales and Tasmania.",
          max_length: "35.0 cm",
          biology: "Found in seagrass beds and on rocky reefs.",
          status: "Least Concern",
          threat_to_humans: "Harmless",
        };
        break;
      case "acanthopagrus_berda":
        fish = {
          name: "Acanthopagrus berda",
          alias: "Goldsilk seabream",
          environment: "Marine; freshwater; brackish; demersal; oceanodromous; depth range ? - 50 m",
          distribution:
            "Indian Ocean, South Africa, Mozambique, the Red Sea, Persian Gulf, India, Phuket (Andaman Sea, specimen lost), and Malaysia (Penang Island and Langkawi Island, near Singapore). Western Pacific specimens recorded as A. berda refer to Acanthopagrus pacificus.",
          max_length: "90.0 cm",
          biology:
            "Feeds on invertebrates, including worms, mollusks, crustaceans and echinoderms; and small fish. Protandrous hermaphrodite. The flesh is excellent. Sold fresh in markets. It is parasitized by the monogenean Discussants australis on the fins and body surface.",
          status: "Least Concern",
          threat_to_humans: "Harmless",
        };
        break;
      case "acanthistius_cinctus":
        fish = {
          name: "Acanthistius cinctus",
          alias: "Yellowbanded perch",
          environment: "Marine; reef-associated; non-migratory; depth range 30 - ? m",
          distribution: "Southwest Pacific.",
          max_length: "50.0 cm",
          biology: "Occurs inshore near reefs.",
          status: "Least Concern",
          threat_to_humans: "Harmless",
        };
        break;
      case "achoerodus_viridis":
        fish = {
          name: "Achoerodus viridis",
          alias: "Eastern blue groper",
          environment: "Marine; reef-associated; depth range 1 - 40 m",
          distribution: "Southwest Pacific: southeastern Australia",
          max_length: "62.0 cm",
          biology: "Adults are found in coastal rocky areas at depths to about 40 m. Protogynous hermaphrodite. Oviparous, distinct pairing during breeding.",
          status: "Near Threatened",
          threat_to_humans: "Harmless",
        };
        break;
      case "aethaloperca_rogaa":
        fish = {
          name: "Aethaloperca rogaa",
          alias: "Redmouth grouper",
          environment: "Marine; reef-associated; non-migratory; depth range 3 - 60 m",
          distribution: "Indo-West Pacific: Red Sea to South Africa and east to the Gilbert Islands.",
          max_length: "60.0 cm",
          biology: "Adults are found in coastal reefs and lagoons, often on silty habitat, in or near caves and holes in the reef. They feed mainly on small fishes, stomatopods, and crustaceans. Small juveniles mimic Centropyge vrolikii, and C. nox until they outgrow their model in size.",
          status: "Least Concern",
          threat_to_humans: "Harmless",
        };
        break;
      case "aluterus_monoceros":
        fish = {
          name: "Aluterus monoceros",
          alias: "Unicorn leatherjacket filefish",
          environment: "Marine; reef-associated; depth range 1 - 80 m",
          distribution: "Circumtropical. Western Atlantic: Massachusetts, USA to Argentina. Eastern Atlantic: west coast of tropical Africa. Eastern Pacific: Guatemala to Chile. Western Indian Ocean: Mozambique and South Africa.",
          max_length: "76.2 cm",
          biology: "Occasionally in shallow water by steep drop-offs. Solitary or in pairs, occasionally in groups of five or six, at less than 10 m depth. Juveniles are pelagic, seen under floating objects. Adults and juveniles are rarely seen near reefs. Feed on benthic organisms.",
          status: "Least Concern",
          threat_to_humans: "Reports of ciguatera poisoning",
        };
        break;
      case "aluterus_scriptus":
        fish = {
          name: "Aluterus scriptus",
          alias: "Scribbled leatherjacket filefish",
          environment: "Marine; reef-associated; depth range 3 - 120 m",
          distribution: "Circumtropical.",
          max_length: "110 cm",
          biology: "Inhabit lagoon and seaward reefs. Occasionally seen under floating objects. Juveniles may travel with weed rafts in open ocean for a long time and reaching a large size. Adults are usually seen along deep coastal slopes or outer reef drop-offs in about 20 meters depth. Feed on algae, seagrass, hydrozoans, gorgonians, colonial anemones, and tunicates.",
          status: "Least Concern",
          threat_to_humans: "Reports of ciguatera poisoning",
        };
        break;
      case "amanses_scopas":
        fish = {
          name: "Amanses scopas",
          alias: "Broom filefish",
          environment: "Marine; reef-associated; depth range 0 - 18 m",
          distribution: "Indo-Pacific: Red Sea south to Maputo, Mozambique and east to the Society and Tuamoto islands, north to the Gotô Islands, Japan, south to the southern Great Barrier Reef.",
          max_length: "20.0 cm",
          biology: "Inhabits clear coastal to outer reefs, usually in rich coral areas with rubble patches or gutters. Feeds on coral polyps. Solitary or in pairs. Less approachable than most filefishes. Usually seeks coverage in large corals when approached.",
          status: "Least Concern",
          threat_to_humans: "Harmless",
        };
        break;
      case "anampses_caeruleopunctatus":
        fish = {
          name: "Anampses caeruleopunctatus",
          alias: "Bluespotted wrasse",
          environment: "Marine; reef-associated; depth range 3 - 30 m",
          distribution: "Indo-West Pacific: Red Sea and South Africa, including the southeast coast, to Easter Island, north to Japan, south to Australia. Not found in the Hawaiian Islands, but replaced by the closely related Anampses cuvier.",
          max_length: "42.0 cm",
          biology: "Adults are found on the surge zone of coral reefs or rocky coasts. They occur singly or in pairs. Tiny juveniles swim with head towards the bottom and slowly undulate the body, looking like a floating leaf in the current. Young feed primarily on small crustaceans and polychaetes, adults switch to larger crustaceans and mollusks as well as polychaetes. They bury at night. Oviparous, distinct pairing during breeding. Occasionally trawled.",
          status: "Least Concern",
          threat_to_humans: "Harmless",
        };
        break;
      case "anyperodon_leucogrammicus":
        fish = {
          name: "Anyperodon leucogrammicus",
          alias: "Slender grouper",
          environment: "Marine; reef-associated; non-migratory; depth range 0 - 80 m",
          distribution: "Indo-Pacific: Red Sea south to Mozambique and east to the Phoenix Islands, north to Japan, south to Australia. Probably including all the islands of the tropical Indian Ocean.",
          max_length: "65.0 cm",
          biology: "Solitary adults inhabit coral rich areas and clear waters on lagoon and seaward reefs. They feed mainly on fishes and probably on crustaceans. The distinctive blue and gold striped juveniles are mimics of the wrasse Halichoeres purpurescens.",
          status: "Least Concern",
          threat_to_humans: "Harmless",
        };
        break;
      case "bodianus_anthioides":
        fish = {
          name: "Bodianus anthioides",
          alias: "Lyretail hogfish",
          environment: "Marine; reef-associated; depth range 6 - 80 m",
          distribution: "Indo-Pacific: Red Sea to South Africa and east to the Line and Tuamoto islands, north to southern Japan, south to New Caledonia and the Austral Islands.",
          max_length: "24.0 cm",
          biology: "Adults inhabit seaward reefs rich with invertebrates such as gorgonians, seawhips, and black corals. Common along steep outer reef slopes deeper than 25 m in Micronesia. Usually seen as lone individuals. Juveniles pose as cleaners. Oviparous, distinct pairing during breeding.",
          status: "Least Concern",
          threat_to_humans: "Harmless",
        };
        break;
      case "caranx_melampygus":
        fish = {
          name: "Caranx melampygus",
          alias: "Bluefin trevally",
          environment: "Marine; brackish; reef-associated; depth range 0 - 190 m",
          distribution: "Indo-Pacific: Red Sea and East Africa to Ducie Island, north to the Ryukyu Islands, south to New Caledonia. Eastern Central Pacific: Mexico to Panama. Hybrid with Caranx sexfasciatus found in Hawaii.",
          max_length: "117 cm",
          biology: "The most common trevally in coral reefs occurring singly or occasionally in schools. Adults are pelagic in coastal and oceanic waters, associated with reefs. Juveniles occur seasonally in shallow sandy inshore waters and rivers. Adults feed mainly on other fishes and crustaceans. They are often toxic when length reaches more than 50 cm. Mainly marketed fresh, but also dried or salted. They are caught primarily on hook-and-line and by spearing; also with traps and gill nets.",
          status: "Least Concern",
          threat_to_humans: "Reports of ciguatera poisoning",
        };
        break;
      default:
        return null;
    }
  
    return (
      <div className="fish-description">
        <h1 style={{ color: '#CE4422' }}>{fish.name} match: {parseFloat(match * 100).toFixed(2)}%</h1>
        <p>
          Alias: {fish.alias} <br />
          Environment: {fish.environment} <br />
          Distribution: {fish.distribution} <br />
          Max Length: {fish.max_length} <br />
          Biology: {fish.biology} <br />
          Status: {fish.status} <br />
          Threat to Humans: {fish.threat_to_humans}
        </p>
      </div>
    );
  };

export default FishDescription;
  