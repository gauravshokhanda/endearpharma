export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  uses: string[];
  dosage: string;
  sideEffects: string[];
  image: string;
  composition: string;
  indications?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Daib-end",
    category: "Diabetes Management",
    description: "Daib-end is a comprehensive capsule formulated with natural ingredients to support blood sugar regulation and overall metabolic health. It contains a blend of herbs known for their beneficial effects on blood glucose levels and lipid profiles. Karela contains an insulin-like compound called Polypeptide or p-insulin which has been shown to control diabetes naturally. Jamun is known to improve blood sugar control. This fruit is 50% water and 14.5% carbohydrates. It contains no sucrose and has hypoglycemic effect that helps reduce blood and urine sugar levels. Giloy helps in the production of insulin & burn excess glucose which further helps in reducing blood sugar levels. Shilajit produced a significant reduction in blood glucose level and also produced beneficial effects on the lipid profile.",
    uses: ["Regulates digestion", "Maintains blood sugar level", "Reduces stress"],
    dosage: "",
    sideEffects: [],
    image: "",
    composition: "Karela 45mg, Jamun 45mg, Gudmar 25mg, Arjuna 40mg, Giloy 45mg, Vidang 40mg, Karanjava 40mg, Neem 40mg, Chiraita 45mg, Paneer Doda 45mg, Methi 25mg, Ashwagandha 45mg, Shilajit 10mg, Loh Bhasam 10mg",
    indications: ["Regulates digestion", "Maintains blood sugar level", "Reduces stress"]
  },
  {
    id: 2,
    name: "Dearcef",
    category: "Anti-Bacterial",
    description: "Designed to kill bacteria. Cefixime is useful in cases of uncomplicated typhoid fever. Cefixime has comparable clinical efficacy and a better adverse events profile than co-amoxiclav. High efficacy & low incidence of side effects make it the drug of choice in RTI.",
    uses: ["Useful in cases of uncomplicated typhoid fever", "Cefixime has comparable clinical efficacy and a better adverse events profile than co-amoxiclav", "High efficacy & low incidence of side effects make it the drug of choice in RTI"],
    dosage: "",
    sideEffects: [],
    image: "",
    composition: "Cefixime 100 mg / 200 mg",
    indications: ["Community Acquired Pneumonia", "Respiratory Tract Infection", "Pharyngitis and Tonsillitis", "Acute exacerbation of chronic bronchitis", "Urinary Tract Infections", "Typhoid Fever"]
  },
  {
    id: 3,
    name: "En-D3",
    category: "Vitamin Supplement",
    description: "Cholecalciferol Solution 60000 IU Nano Shot. Nano Emulsion En-D3. Nanoemulsion Droplet Sizes as Per Pharmaceutical Standards Should be below 100 nm. Any Formulation above 100 nm Droplet size is not an Nanoemulsion? that would be a Microemulsion. VITAMIN D3 Deficiency is Recognized as Pandemic affecting all ages and Strata of population as endogenous Cutaneous System of VIT-D3 is Insufficient so Supplement Needed.",
    uses: ["Cholecalciferol Solution", "Vitamin D3 Deficiency Supplement", "Nano Emulsion Formula"],
    dosage: "",
    sideEffects: [],
    image: "",
    composition: "Cholecalciferol 60000 IU",
    indications: ["Prediabetes/Dizbetes", "Erectile Dysfunction", "CKD Hyperpara Thyroidism", "Prevent heart attack up to 50%", "Improves product of test hormones", "Mental Health/ Depression"]
  },
  {
    id: 4,
    name: "Endear Gold",
    category: "Sexual Health / Energy Supplement",
    description: "Each capsule contains various ingredients. Tongkat Ali has demonstrated the ability to increase libido and improve erectile function when compared to a placebo. Tongkat Ali results showed an increase in testosterone levels and muscle strength, measured by hand-grip test. As Tongkat Ali brings free testosterone levels closer to normal, it can help physically active seniors, both male & female, increase muscle strength.",
    uses: ["Brings Back lost vigour and vitality", "Increases sexual desires & makes you perform at anytime", "Helps in increasing the stamina", "Boots power to perform longer"],
    dosage: "",
    sideEffects: [],
    image: "",
    composition: "Shatavari 100 mg, Aswagandha 100 mg, Shudh Konch Beej 20 mg, Latakasturi 10 mg, Musli Safed 20 mg, Akarkara 20 mg, Javitri 25 mg, Gokshru 30 mg, Vidarikand 45 mg, Kesar 5 mg, Makardhwaj 10 mg, Triwang Bhasam 25 mg, Loh Bhasam 30 mg, Swanwng Bhasm 25 mg, Shilajeet 35 mg, Tongkat Ali (Eurycoma longifolia) Wh.pt. 200mg",
    indications: ["Eliminates Weakness", "Boost Stamina", "Increases Testosterone", "Supports Immunity", "Speeds Muscle Recovery"]
  },
  
  {
    id: 5,
    name: "ENDECOLD-DS",
    category: "Cold & Flu / Respiratory",
    description: "ENDECOLD-DS is a syrup containing Paracetamol for pain and fever, Phenylephrine for nasal passage and respiratory system, Chlorpheniramine Maleate as an antihistamine, and Sodium Citrate as an expectorant. It is formulated to provide relief from cold and flu symptoms.",
    uses: [
      "Most time tested Antipyretic/analgesic",
      "No significant action on COX-1 & COX-2 (Paracetamol)",
      "Safest anti-pyretic analgesic (Phenylephrine)",
      "Minimal effects on cardiovascular, Respiratory & GI System (Phenylephrine)",
      "Open Airways/Nasal passage (Phenylephrine)",
      "Competitively antagonise action of histamine at H1receptors (Chlorpheniramine)",
      "Effectively block Histamine induced broncho constriction (Chlorpheniramine)",
      "A well recognised expectorant, facilitates raising of sputum (Sodium Citrate)"
    ],
    dosage: "Each 5ml Contains",
    sideEffects: [],
    image: "",
    composition: "Paracetamol 250mg, Phenylephrine Hcl 5mg, Chlorpheniramine Maleate 2mg, Sodium Citrate 60mg",
    indications: [
      "Seasonal Allergic Rhinitis",
      "Nasal Congestion",
      "Fever along with body pain",
      "Sneezing",
      "Irritation",
      "Blocked Nose"
    ]
  },
  {
    id: 6,
    name: "ENDECOLD-DROP",
    category: "Cold & Flu / Respiratory",
    description: "ENDECOLD-DROP is a liquid formulation containing Paracetamol for pain and fever, Phenylephrine for nasal passage and respiratory system, and Chlorpheniramine Maleate as an antihistamine. It is designed to alleviate cold and flu symptoms.",
    uses: [
      "Most time tested Antipyretic/analgesic (Paracetamol)",
      "No significant action on COX-1 & COX-2 (Paracetamol)",
      "Safest anti-pyretic analgesic (Phenylephrine)",
      "Minimal effects on cardiovascular, Respiratory & GI System (Phenylephrine)",
      "Open Airways/Nasal passage (Phenylephrine)",
      "Competitively antagonise action of histamine at H1receptors (Chlorpheniramine)",
      "Effectively block Histamine induced broncho constriction (Chlorpheniramine)"
    ],
    dosage: "Each ml Contains",
    sideEffects: [],
    image: "",
    composition: "Paracetamol 125mg, Phenylephrine 2.5mg, Chlorpheniramine Maleate 1mg",
    indications: [
      "Seasonal Allergic Rhinitis",
      "Nasal Congestion",
      "Fever along with body pain",
      "Sneezing",
      "Irritation",
      "Blocked Nose"
    ]
  },
  {
    id: 7,
    name: "Endeflam-S",
    category: "Pain Relief / Anti-inflammatory",
    description: "Endeflam-S is a combination tablet that offers effective relief from inflammation and musculoskeletal pain. It includes Aceclofenac for targeted anti-inflammatory action, Paracetamol for rapid pain and fever relief, and Serratiopeptidase to reduce swelling and promote tissue repair.",
    uses: [
      "Targets inflammation at specific sites (Aceclofenac)",
      "Quickly initiates analgesic & antipyretic activity (Paracetamol)",
      "Centrally acting enzyme for musculoskeletal pain (Serratiopeptidase)"
    ],
    dosage: "Each tablet contains: Aceclofenac 100mg, Paracetamol 325mg, Serratiopeptidase 15mg",
    sideEffects: [],
    image: "/mnt/data/WhatsApp Image 2025-06-17 at 11.10.40_bbfebbb0.jpg",
    composition: "Aceclofenac 100mg, Paracetamol 325mg, Serratiopeptidase 15mg",
    indications: [
      "Low Back Pain",
      "Post Operative Pain",
      "Osteoarthritis",
      "Cuts, Wounds & Burns",
      "Fracture & Trauma",
      "Sports Injuries",
      "Ankylosing Spondylitis",
      "Dysmenorrhea"
    ]
  },
  
  {
    id: 8,
    name: "Endeflam-TH",
    category: "Musculoskeletal / Pain Relief",
    description: "Endeflam-TH is a dual-action tablet combining Etoricoxib, a selective COX-2 inhibitor for pain relief, and Thiocolchicoside, a centrally acting muscle relaxant. This combination is effective in treating inflammatory and painful musculoskeletal conditions without affecting muscle tone.",
    uses: [
      "Symptomatic treatment of osteoarthritis, rheumatoid arthritis, ankylosing spondylitis, and acute gouty arthritis (Etoricoxib)",
      "Minimal suppression of COX-1 and superior pain relief (Etoricoxib)",
      "More effective in backache, neuralgia pain, Parkinsonism, and sciatic pain (Thiocolchicoside)",
      "Centrally acting muscle relaxant with no sedation or muscle tone impairment (Thiocolchicoside)"
    ],
    dosage: "Each tablet contains: Etoricoxib 60mg, Thiocolchicoside 4mg",
    sideEffects: [],
    image: "/mnt/data/WhatsApp Image 2025-06-17 at 11.23.42_3203591b.jpg",
    composition: "Etoricoxib 60mg, Thiocolchicoside 4mg",
    indications: [
      "Muscle Spasm",
      "Torticollis",
      "Low Back Pain",
      "Sprain & Strain",
      "Sciatica",
      "Rheumatoid Arthritis",
      "Acute pain and gout",
      "Psoriatic arthritis"
    ]
  },
  {
    id: 9,
    name: "Endexim-O",
    category: "Anti-Bacterial / Antibiotic",
    description: "Endexim-O is a combination antibiotic tablet containing Cefpodoxime and Ofloxacin. It is designed to treat a wide range of bacterial infections by targeting both gram-positive and gram-negative bacteria, offering superior tissue penetration and bactericidal activity.",
    uses: [
      "Active against both gram-positive and gram-negative organisms (Cefpodoxime)",
      "Greater tissue penetration than cefixime (Cefpodoxime)",
      "Demonstrates excellent bactericidal activity against S. pneumoniae (Cefpodoxime)",
      "Effective against aerobic and anaerobic bacteria (Ofloxacin)",
      "Approved adjuvant in MDR TB therapy (Ofloxacin)",
      "Excellent intracellular penetration (Ofloxacin)"
    ],
    dosage: "Each tablet contains: Cefpodoxime 200mg, Ofloxacin 200mg",
    sideEffects: [],
    image: "/mnt/data/WhatsApp Image 2025-06-17 at 11.53.41_9876f67b.jpg",
    composition: "Cefpodoxime 200mg, Ofloxacin 200mg",
    indications: [
      "Tonsillitis",
      "Chronic Bronchitis",
      "Urinary Tract Infections",
      "Community-acquired pneumonia",
      "Typhoid / UFTTIS / Acute Otitis Media",
      "Pyrexia of unknown origin"
    ]
  }
  

  ]; 