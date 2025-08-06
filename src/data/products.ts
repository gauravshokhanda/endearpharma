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
    image: "/images/daib-end.png",
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
    image: "/images/dearcef.png",
    composition: "Cefixime 100 mg / 200 mg",
    indications: ["Community Acquired Pneumonia", "Respiratory Tract Infection", "Pharyngitis and Tonsillitis", "Acute exacerbation of chronic bronchitis", "Urinary Tract Infections", "Typhoid Fever"]
  },
  {
    id: 3,
    name: "Dearcef - 100 DT",
    category: "Anti-Bacterial",
    description: "Designed to kill bacteria. Cefixime is useful in cases of uncomplicated typhoid fever. Cefixime has comparable clinical efficacy and a better adverse events profile than co-amoxiclav. High efficacy & low incidence of side effects make it the drug of choice in RTI.",
    uses: [
      "Useful in cases of uncomplicated typhoid fever",
      "Cefixime has comparable clinical efficacy and a better adverse events profile than co-amoxiclav",
      "High efficacy & low incidence of side effects make it the drug of choice in RTI"
    ],
    dosage: "",
    sideEffects: [],
    image: "/images/DEARCEF2.png",
    composition: "Cefixime 100 mg / 200 mg",
    indications: [
      "Community Acquired Pneumonia",
      "Respiratory Tract Infection",
      "Pharyngitis and Tonsillitis",
      "Acute exacerbation of chronic bronchitis",
      "Urinary Tract Infections",
      "Typhoid Fever"
    ]
  },
  {
    id: 4,
    name: "En-D3",
    category: "Vitamin Supplement",
    description: "Cholecalciferol Solution 60000 IU Nano Shot. Nano Emulsion En-D3. Nanoemulsion Droplet Sizes as Per Pharmaceutical Standards Should be below 100 nm. Any Formulation above 100 nm Droplet size is not an Nanoemulsion? that would be a Microemulsion. VITAMIN D3 Deficiency is Recognized as Pandemic affecting all ages and Strata of population as endogenous Cutaneous System of VIT-D3 is Insufficient so Supplement Needed.",
    uses: ["Cholecalciferol Solution", "Vitamin D3 Deficiency Supplement", "Nano Emulsion Formula"],
    dosage: "",
    sideEffects: [],
    image: "/images/en-d3.png",
    composition: "Cholecalciferol 60000 IU",
    indications: ["Prediabetes/Dizbetes", "Erectile Dysfunction", "CKD Hyperpara Thyroidism", "Prevent heart attack up to 50%", "Improves product of test hormones", "Mental Health/ Depression"]
  },
  {
    id: 5,
    name: "Endear Gold",
    category: "Sexual Health / Energy Supplement",
    description: "Each capsule contains various ingredients. Tongkat Ali has demonstrated the ability to increase libido and improve erectile function when compared to a placebo. Tongkat Ali results showed an increase in testosterone levels and muscle strength, measured by hand-grip test. As Tongkat Ali brings free testosterone levels closer to normal, it can help physically active seniors, both male & female, increase muscle strength.",
    uses: ["Brings Back lost vigour and vitality", "Increases sexual desires & makes you perform at anytime", "Helps in increasing the stamina", "Boots power to perform longer"],
    dosage: "",
    sideEffects: [],
    image: "/images/endeargold.png",
    composition: "Shatavari 100 mg, Aswagandha 100 mg, Shudh Konch Beej 20 mg, Latakasturi 10 mg, Musli Safed 20 mg, Akarkara 20 mg, Javitri 25 mg, Gokshru 30 mg, Vidarikand 45 mg, Kesar 5 mg, Makardhwaj 10 mg, Triwang Bhasam 25 mg, Loh Bhasam 30 mg, Swanwng Bhasm 25 mg, Shilajeet 35 mg, Tongkat Ali (Eurycoma longifolia) Wh.pt. 200mg",
    indications: ["Eliminates Weakness", "Boost Stamina", "Increases Testosterone", "Supports Immunity", "Speeds Muscle Recovery"]
  },
  
  {
    id: 6,
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
    image: "/images/endcold.png",
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
    id: 7,
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
    image: "/images/endecold.png",
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
    id: 8,
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
    image: "/images/endeflame-s.png",
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
    id: 9,
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
    image: "/images/Endeflam (2).png",
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
    id: 10,
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
    image: "/images/ede-o.png",
    composition: "Cefpodoxime 200mg, Ofloxacin 200mg",
    indications: [
      "Tonsillitis",
      "Chronic Bronchitis",
      "Urinary Tract Infections",
      "Community-acquired pneumonia",
      "Typhoid / UFTTIS / Acute Otitis Media",
      "Pyrexia of unknown origin"
    ]
  },
 {
    id: 11,
    name: "Enzacort-6",
    category: "Autoimmune / Steroid",
    description: "Enzacort-6 is a tablet containing Deflazacort 6mg, which is indicated for various autoimmune and inflammatory conditions. It has a superior safety profile compared to Prednisolone and Methyl Prednisolone, ensuring long-term use with a negligible effect on bone mineral density (BMD).",
    uses: [
      "Superior safety profile compare to Prednisolone & Methyl Prednisolone",
      "Superior safety profile ensures long term use",
      "Negligible effect on BMD"
    ],
    dosage: "Tablets",
    sideEffects: [],
    image: "/images/enzocort.png",
    composition: "Deflazacort 6mg",
    indications: [
      "Rheumatoid Arthritis",
      "Juvenile Chronic Arthritis",
      "Asthma Ulcerative Colitis",
      "Severe Allergic Conditions",
      "Inflammatory Skin Conditions",
      "Other Steroid Respiratory Conditions"
    ]
  },
  {
    id: 12,
    name: "Fertidear Syrup",
    category: "Maternity / Fertility",
    description: "Fertidear Syrup is formulated to restore the joy of maternity, containing various herbal extracts to support female reproductive health and fertility.",
    uses: [
      "Restores the joy of maternity",
      "Most effective herbs for ovulation, maintain hormonal balance major herbs for infertility (Chast berry)",
      "Regulates the estrogen level which enhances ovulation, amazing herbs for ovulation, high medicinal value for infertility (False Unicorn)",
      "Stimulates the ovulation it consist Isoflavones the main component for perfecting ovulation (Red clover)",
      "Corrects normal imbalance, maintains ovulation, best medicine for pregnancy (Shatavari)",
      "Has good effects on PCOS (Shila Sindoor)",
      "Has positive effects on insulin resistance a parameter of PCOS and regulates menstrual cycle (Dalchini)"
    ],
    dosage: "Each 10ml contains",
    sideEffects: [],
    image: "/images/Feritidear.png",
    composition: "Chaste berry Ext. 200mg, Red Rasberry Ext. 200mg, Aloera Ext 200mg, Punarnava Ext. 200mg, Tribulus Ext. 200mg, Rohdiola Rosea Ext. 200mg, Ashoka Ext. 500mg, Shatvari Ext. 500mg, Lodhra Ext 500mg, Dashmool Ext. 500mg, Triphala Ext. 200mg, Vat Twak Ext. 200mg, Nagar Motha Ext. 200mg, Aswagandha Ext. 200mg, Jatamanshi Ext. 200mg, Methidana Ext. 100mg, Jeevanti Ext. 200mg, Guduchi Ext. 200mg, Ulat Kambal Ext. 200mg, Daruharidra Ext. 200mg, Indrayan Beej Ext. 200mg | 10 ml",
    indications: [
      "Amenorrhea",
      "Dysmenorrhea",
      "Leucorrhea",
      "Regulate the estrogen levels to induce ovulation",
      "Very potential to check the PCOS",
      "Make a healthful and fertile women"
    ]
  },
  {
    id: 13,
    name: "Fertidear Tablet",
    category: "Maternity / Fertility",
    description: "Fertidear Tablet is part of a combi-pack designed to restore the joy of maternity, containing various herbal extracts to support female reproductive health and fertility.",
    uses: [
      "Restores the joy of maternity",
      "Most effective herbs for ovulation, maintain hormonal balance major herbs for infertility (Chast berry)",
      "Regulates the estrogen level which enhances ovulation, amazing herbs for ovulation, high medicinal value for infertility (False Unicorn)",
      "Stimulates the ovulation it consist Isoflavones the main component for perfecting ovulation (Red clover)",
      "Corrects normal imbalance, maintains ovulation, best medicine for pregnancy (Shatavari)",
      "Has good effects on PCOS (Shila Sindoor)",
      "Has positive effects on insulin resistance a parameter of PCOS and regulates menstrual cycle (Dalchini)"
    ],
    dosage: "Tablet",
    sideEffects: [],
    image: "/images/fertidear tablet.png",
    composition: "Chasete Berry (Vitex) Ext. 100mg, False Unicorn Ext. 100mg, Re Clover Ext. 100mg, Shatavari Ext. 100mg, Tribullus Ext. 100mg, Shila Sindor 50mg, Dalchini Ext. 50mg, Mulheti Ext. 50mg, Kachnar Guggul 100mg, Shivlighi Seeds Ext. 100mg, Putrajeevak Ext. 100mg",
    indications: [
      "Amenorrhea",
      "Dysmenorrhea",
      "Leucorrhea",
      "Regulate the estrogen levels to induce ovulation",
      "Very potential to check the PCOS",
      "Make a healthful and fertile women"
    ]
  },
  {
    id: 14,
    name: "Fightodear Syrup",
    category: "Immunity / Infection Management",
    description: "Fightodear Syrup is a herbal remedy designed to strengthen immunity, prevent and treat various infections, increase the effectiveness of protective white blood cells, and manage respiratory tract infections. It also helps in elevating the body's resistance to infections and is useful for increasing platelet count in patients with dengue hemorrhagic fever.",
    uses: [
      "Herbal remedy to strengthen immunity thereby preventing and treating inactions",
      "Helps increase the effectiveness of protective White Blood Cells thereby protecting the body again infection",
      "Effectively manages upper and lower respiratory tract infections",
      "Increases the levels of antibody forming cells, thereby elevating the body's resistance to infections",
      "Useful for patients resistant to antibiotic therapy",
      "Increase platelet count in patients with dengue hemorrhagic fever"
    ],
    dosage: "10 ml. SYRUP",
    sideEffects: [],
    image: "/images/fightodear.png",
    composition: "Papaya Leaf Ext. 1500mg, Wheat Germ Ext. 500mg, Aswagandha Etc. 250mg, Giloy Ext. 500mg, Tulsi Patra Ext. 250mg, Chiraya Ext. 250mg, Daruhaldi Ext. 250mg, Goat Milk Ext. 500mg, Karanjana Ext. 250mg, Mulhati Ext. 250mg, Ginger Ext. 250mg, Kiviphal Ext. 200mg, Lehberry Ext. 200mg",
    indications: [
      "Viral Fever",
      "Dengue",
      "Malaria",
      "Typhoid"
    ]
  },
  {
    id: 15,
    name: "Granidear",
    category: "Antiemetic / Oncology Support",
    description: "Granidear is a potent antiemetic syrup formulation containing Granisetron. It is used to prevent and manage nausea and vomiting associated with chemotherapy, radiation, and surgical procedures. It works by reducing the activity of the vagus nerve and deactivating vomiting centers in the brain, without affecting dopamine or muscarinic centers.",
    uses: [
      "Prevents nausea and vomiting induced by chemotherapy and radiation therapy",
      "More effective than ondansetron in preventing postoperative nausea and vomiting (PONV)",
      "Acts on the vagus nerve and vomiting centers of the brain",
      "Does not interfere with dopamine or muscarinic systems"
    ],
    dosage: "Each 5ml contains: Granisetron 1mg",
    sideEffects: [],
    image: "/images/granidear.png",
    composition: "Granisetron 1mg per 5ml",
    indications: [
      "Chemotherapy induced nausea and vomiting",
      "Post operative nausea and vomiting",
      "Radiation induced nausea and vomiting",
      "Hyperemesis gravidarum"
    ]
  },
  {
    id: 16,
    name: "Hepdear-DS",
    category: "Liver Support / Herbal Syrup",
    description: "Hepdear-DS is a sugar-free liver syrup formulated with 24 highly effective herbs and three key heptoprotective ingredients: Mandur Bhasma, Swarn Makshik Bhasma, and Kashish Bhasma. It supports liver detoxification, enzyme balance, digestion, and overall liver function.",
    uses: [
      "Cholagogue, hepatoprotective, and liver stimulant action",
      "Promotes detoxification and maintains healthy liver enzyme levels",
      "Improves appetite, digestion, and nutrient assimilation",
      "Reduces liver fat and enhances liver function",
      "Clears bile accumulation, aiding in jaundice recovery"
    ],
    dosage: "Syrup - Sugar Free; each dose contains herbal extracts with Mandur Bhasma, Swarn Makshik Bhasma, and Kashish Bhasma",
    sideEffects: [],
    image: "/images/hepdear-ds-syrup.png",
    composition: "Mandur Bhasma, Swarn Makshik Bhasma, Kashish Bhasma with 24 herbal extracts",
    indications: [
      "Liver Disorders",
      "Hepatitis & Jaundice",
      "Impaired Digestion",
      "Flatulence",
      "Aiding Digestion",
      "Eliminating Toxins",
      "Improves Liver Metabolism",
      "Serosis & Fatty Liver Condition"
    ]
  },
  {
    id: 17,
    name: "Hepdear-DS Plus",
    category: "Liver Support / Herbal Syrup",
    description: "Hepdear-DS Plus is a sugar-free liver syrup formulated with 24 powerful herbs and key hepatoprotective ingredients such as Mandur Bhasma, Swarn Makshik Bhasma, Kashish Bhasma, along with the added benefits of Aloe Vera and Silymarin. It is designed to protect, repair, and detoxify the liver from various toxins and conditions.",
    uses: [
      "Exhibits hepatoprotective activity, supporting cellular membrane composition (Aloevera)",
      "Helps repair liver damage from alcohol and toxins (Aloevera)",
      "Boosts immune system and may help prevent cancer (Aloevera)",
      "Protects liver cells from toxins (Silymarin)",
      "Supports treatment of liver disorders including viral hepatitis (Silymarin)"
    ],
    dosage: "Syrup - Sugar Free; contains Aloe Vera, Silymarin, Mandur Bhasma, Swarn Makshik Bhasma, Kashish Bhasma, and 24 herbal extracts",
    sideEffects: [],
    image: "/images/hepdearplus.png", 
    composition: "Aloe Vera, Silymarin, Mandur Bhasma, Swarn Makshik Bhasma, Kashish Bhasma, 24 herbal ingredients",
    indications: [
      "Cirrhosis",
      "Toxic Liver Damage",
      "Acute viral hepatitis & intoxications",
      "Alcoholism",
      "Chronic Hepatitis"
    ]
  },
  {
    id: 18,
    name: "Iro-Aid",
    category: "Iron & Nutritional Supplement",
    description: "Iro-Aid is a syrup formulation combining Ferrous Ascorbate, Folic Acid, and Methylcobalamin. It is designed to treat iron deficiency anemia, support pregnancy, and improve red blood cell production. The formulation ensures effective iron absorption with minimal GI side effects, while also reducing homocysteine levels with folic acid and vitamin B12.",
    uses: [
      "Delivers maximum ferrous iron to the duodenal brush border (Ferrous Ascorbate)",
      "Produces minimal GI adverse effects with significant hemoglobin improvement",
      "Folic Acid supplementation during pregnancy may reduce depression risk postpartum",
      "Controls homocysteine levels to lower risk of preeclampsia, NTD, and neuron dysfunction",
      "Supports red blood cell formation and overall nutritional balance"
    ],
    dosage: "Each 5ml contains: Ferrous Ascorbate 30mg, Folic Acid 1.5mg, Methylcobalamin 750mcg",
    sideEffects: [],
    image: "/images/iro-aid.webp",
    composition: "Ferrous Ascorbate 30mg, Folic Acid 1.5mg, Methylcobalamin 750mcg",
    indications: [
      "Iron Deficiency Anaemia",
      "Pregnancy",
      "Lactation",
      "Pernicious Anaemia"
    ]
  },
  {
    id: 19,
    name: "Ketodear Plus",
    category: "Dermatology / Antifungal Soap",
    description: "Ketodear Plus is a medicated soap formulated with Ketoconazole and Cetrimide. It is highly effective against fungal and bacterial skin infections. Ketoconazole acts as a broad-spectrum antifungal agent, while Cetrimide provides antiseptic and wound cleansing properties, making the soap suitable for daily hygiene in infection-prone or affected areas.",
    uses: [
      "Treats fungal infections and seborrheic dermatitis (Ketoconazole)",
      "Highly effective and well-tolerated broad-spectrum antifungal agent",
      "Reduces inflammatory signs and restores antimicrobial effects",
      "Active against a wide range of dermatophytes, yeasts, and bacteria",
      "Cetrimide serves as a great antiseptic by causing cell lysis",
      "Does not cause irritation or burning at the site of action",
      "Recommended for wound cleansing and bacterial infection prevention"
    ],
    dosage: "Soap with Ketoconazole 2% and Cetrimide 0.5%",
    sideEffects: [],
    image: "/images/ketodear-plus.png",
    composition: "Ketoconazole 2%, Cetrimide 0.5%",
    indications: [
      "Skin Cleansing",
      "Cleaning of wounds",
      "Seborrheic Dermatitis",
      "Lesions, Bacterial infection",
      "Dandruff",
      "Candidiasis",
      "Fungal infections"
    ]
  },
  {
    id: 20,
    name: "Ketodear-200",
    category: "Antifungal / Oral Tablet",
    description: "Ketodear-200 is an oral antifungal tablet containing Ketoconazole 200mg. It is effective and safe for treating a wide variety of systemic and superficial fungal infections. It can be used as maintenance therapy to prevent recurrence and is also recommended in immunocompromised patients for empirical antifungal treatment.",
    uses: [
      "Orally active broad-spectrum antifungal agent",
      "Safe for maintenance therapy to prevent disease recurrence",
      "Recommended as first-line therapy for sporotrichosis",
      "Used empirically in antifungal therapy for febrile neutropenic cancer patients"
    ],
    dosage: "Each tablet contains: Ketoconazole 200mg",
    sideEffects: [],
    image: "/images/ketdear.webp",
    composition: "Ketoconazole 200mg",
    indications: [
      "Histoplasmosis",
      "Oral Candidiasis",
      "Esophageal Candidiasis",
      "Vulvovaginal Candidiasis",
      "Refractory Infections to Amphotericin B",
      "Tinea cruris",
      "Aspergillosis",
      "Tinea Corporis",
      "Onychomycosis",
      "Tinea capitis",
      "Blastomycosis"
    ]
  },
  {
    id: 21,
    name: "Kufdear",
    category: "Cough & Cold / Herbal Syrup",
    description: "Kufdear is a honey-based herbal cough syrup formulated with natural ingredients like Amaltas, Tulsi, Mulethi, Vasaka, and Kanthkar. It helps soothe throat irritation, relieve cough, reduce chest congestion, and improve respiratory health without causing drowsiness.",
    uses: [
      "Honey provides natural relief and is more effective than many OTC cough suppressants",
      "Amaltas helps relieve cough and chest congestion",
      "Tulsi prevents onset of cold and cough during seasonal changes",
      "Mulethi reduces throat irritation and acts as a demulcent and expectorant",
      "Vasaka offers anti-inflammatory, antitussive, and bronchodilatory action",
      "Kanthkar strengthens lung structure and promotes ease of breathing"
    ],
    dosage: "Herbal honey-based syrup with key ingredients: Honey, Amaltas, Tulsi, Mulethi, Vasaka, Kanthkar",
    sideEffects: [],
    image: "/images/kufdearsyrup1.png",
    composition: "Honey, Amaltas, Tulsi, Mulethi, Vasaka, Kanthkar",
    indications: [
      "Dry or Productive Cough",
      "Cold and Flu Symptoms",
      "Throat Irritation",
      "Seasonal Respiratory Allergies",
      "Chest Congestion",
      "Breathing Difficulty"
    ]
  },
  {
    id: 22,
    name: "Kufdear-LS",
    category: "Cough & Cold / Sugar-Free Syrup",
    description: "Kufdear-LS is a sugar-free syrup formulated with Levosalbutamol Sulphate, Ambroxol HCl, and Guaiphenesin. It is used to manage productive cough, bronchitis, and respiratory tract infections by relaxing airway muscles, thinning mucus, and promoting its expulsion, thus improving overall breathing comfort.",
    uses: [
      "Rapid action bronchodilator (Levosalbutamol)",
      "Relaxes smooth muscles to improve breathing",
      "No side effects like tachycardia or hypokalemia",
      "Breaks mucus and ensures faster expulsion (Ambroxol HCl)",
      "Excellent expectorant effect (Guaiphenesin)",
      "Soothes inflamed throat and clears congestion"
    ],
    dosage: "Each 5ml contains: Levosalbutamol Sulphate 1mg, Ambroxol HCl 30mg, Guaiphenesin 50mg",
    sideEffects: [],
    image: "/images/kudear.png",
    composition: "Levosalbutamol Sulphate 1mg, Ambroxol HCl 30mg, Guaiphenesin 50mg",
    indications: [
      "Asthma",
      "Chronic Obstructive Pulmonary Disease",
      "Productive Cough",
      "Co-prescription in RTIs" 
    ]
  },

  {
    id: 23,
    name: "Montedear-AF",
    category: "Anti-Allergic / Respiratory Tablet",
    description: "Montedear-AF is a combination tablet of Acebrophylline, Fexofenadine, and Montelukast. It is specially formulated to treat allergic symptoms, asthma, COPD, and bronchitis. It combines mucolytic, bronchodilator, antihistaminic, and leukotriene receptor antagonistic actions to relieve bronchospasm, inflammation, and allergic responses effectively.",
    uses: [
      "Acebrophylline: Mucolytic and bronchodilator with greater efficacy than ambroxol or theophylline",
      "Fexofenadine: Antihistaminic agent that reduces allergic antigen-induced bronchospasm",
      "Inhibits inflammatory responses mediated by mast cells, basophils, epithelial cells, eosinophils, and lymphocytes",
      "Montelukast: Leukotriene receptor antagonist that relieves leukotriene-induced bronchoconstriction"
    ],
    dosage: "Each tablet contains: Acebrophylline 200mg, Fexofenadine 120mg, Montelukast 10mg",
    sideEffects: [],
    image: "/images/motedearl.png",
    composition: "Acebrophylline 200mg, Fexofenadine 120mg, Montelukast 10mg",
    indications: [
      "Bronchial Asthma",
      "Chronic Obstructive Pulmonary Disease (COPD)",
      "Acute exacerbations of chronic bronchitis"
    ]
  },

  {
    id: 24,
    name: "Montedear-L",
    category: "Anti-Allergic / Respiratory",
    description: "Montedear-L is available in both tablet and syrup forms. It combines Levocetirizine, a potent antihistamine, with Montelukast, a leukotriene receptor antagonist. This dual-action formula is effective in treating allergic rhinitis, asthma, and bronchial inflammation by reducing eosinophilic activity and bronchoconstriction.",
    uses: [
      "Montelukast: Reduces bronchoconstriction by blocking leukotriene receptors",
      "Lowers activated eosinophils and mast cell-induced bronchial contractions",
      "Levocetirizine: Potent antihistamine with high safety profile",
      "FDA-approved for seasonal & perennial allergic rhinitis and chronic urticaria"
    ],
    dosage: "Tablet: Levocetirizine 5mg + Montelukast 10mg; Syrup: Levocetirizine 2.5mg + Montelukast 4mg/5ml",
    sideEffects: [],
    image: "/images/montedear.png",
    composition: "Levocetirizine 5mg + Montelukast 10mg (Tablet), Levocetirizine 2.5mg + Montelukast 4mg/5ml (Syrup)",
    indications: [
      "Allergic Bronchitis",
      "Seasonal Allergic Rhinitis",
      "Perennial Allergic Rhinitis",
      "Asthma",
      "Asthma with Allergic Rhinitis"
    ]
  },
  {
    id: 25,
    name: "Nurodear-LC",
    category: "Reproductive Health / Antioxidant Sachets",
    description: "Nurodear-LC is a powerful sachet-based nutritional formulation designed to support reproductive health, cardiovascular function, and metabolic balance. It combines antioxidants, vitamins, amino acids, and essential fatty acids to boost fertility, protect against oxidative damage, and promote overall cellular health in men and women.",
    uses: [
      "CoQ10: Boosts cell energy, fertility, bone health, and liver function",
      "Myo-inositol & D-Chiro Inositol: Supports ovulation, insulin function, and healthy menstruation",
      "L-Carnitine: Enhances sperm motility and healthy circulation",
      "L-Methyl Folate: Prevents folate deficiency and supports red blood cell formation",
      "Lycopene: Improves sperm morphology and reduces oxidative sperm DNA damage",
      "Vitamin B9: Supports glucose metabolism and fetal brain development",
      "Omega-3 (EPA & DHA): Lowers cholesterol and supports fetal brain development",
      "L-Arginine: Helps blood pressure, treats ED, and improves vascular health",
      "Astaxanthin: Powerful antioxidant that reduces inflammation and oxidative stress"
    ],
    dosage: "Sachet formulation; 1 daily or as prescribed",   
    sideEffects: [],
    image: "/images/neurosachet.png",
    composition: "CoQ10 200mg, Myo-Inositol 1000mg, D-Chiro Inositol 25mg, L-Carnitine 1000mg, L-Methyl Folate 15mg, Lycopene 8000mcg, Vitamin D3 1000 IU, Vitamin B9, Omega 3 (EPA 180mg, DHA 120mg), L-Arginine 2000mg, Astaxanthin 2mg",
    indications: [
      "Male and Female Fertility Support",
      "Sperm Motility & Morphology Improvement",
      "PCOS & Ovulatory Health",
      "Folate Deficiency Prevention",  
      "Metabolic Syndrome",
      "Cardiovascular & Antioxidant Protection",
      "Pregnancy Brain Development Support",
      "Erectile Dysfunction"
    ]
  },
  {
    id: 26,
    name: "Nurodear-LC (General Wellness)",
    category: "Cardiovascular / Neuroprotective / Metabolic Health",
    description: "Nurodear-LC is a sachet-based supplement packed with antioxidants, essential fatty acids, vitamins, and amino acids. It is specially designed to improve cardiovascular health, reduce oxidative stress, regulate blood sugar, and support overall cognitive and metabolic function.",
    uses: [
      "Coenzyme Q10: Enhances heart health, lowers blood pressure, improves muscle performance, reduces age-related hearing loss and migraine frequency",
      "Lycopene: Prevents strokes, supports vascular function, reduces homocysteine, and protects cells from cancer",
      "Myo-Inositol & D-Chiro Inositol: Supports blood sugar regulation, mental health, and metabolic performance",
      "L-Carnitine: Improves endurance, supports energy metabolism, and reduces fatigue in patients with cardiac conditions",
      "Vitamin D3: Enhances calcium absorption, muscle and immune strength, and reduces cardiovascular disease risk",
      "Omega 3 Fatty Acid (EPA & DHA): Reduces triglycerides, blood pressure, stroke and heart disease risk",
      "L-Arginine: Boosts nitric oxide, enhances exercise performance, reduces cardiac event risk",
      "Astaxanthin: Powerful antioxidant that lowers oxidative stress and systemic inflammation"
    ],
    dosage: "1 sachet daily or as advised by your healthcare provider",
    sideEffects: [],
    image: "/images/neurosachet.png",
    composition: "CoQ10 200mg, Myo-Inositol 1000mg, D-Chiro Inositol 25mg, L-Carnitine 1000mg, L-Methyl Folate 15mg, Lycopene 8000mcg, Vitamin D3 1000 IU, EPA 180mg, DHA 120mg, L-Arginine 2000mg, Astaxanthin 2mg",
    indications: [
      "Metabolic Syndrome",
      "Cardiovascular Disease",
      "Hypertension",
      "Migraine & Hearing Loss Support",
      "Stroke Prevention",
      "Muscle Endurance & Recovery",
      "Anti-inflammatory & Antioxidant Protection"
    ]
  },
  {
    id: 27,
    name: "Nurodear-NT",
    category: "Neuropsychiatry / Neuropathy Tablets",
    description: "Nurodear-NT is a neuroprotective and antidepressant tablet combining Nortriptyline, Pregabalin, and Methylcobalamin. It is formulated to address nerve pain, anxiety disorders, epilepsy, and diabetic neuropathy by targeting nerve regeneration, neurotransmitter balance, and axonal repair.",
    uses: [
      "Nortriptyline: Selective serotonin reuptake inhibitor; increases serotonin & norepinephrine levels",
      "Improves mood, sleep, and helps in migraine prevention",
      "Pregabalin: FDA-approved for postherpetic neuralgia; potent anticonvulsant with no drug interaction",
      "Faster absorption and high bioavailability",
      "Methylcobalamin: Supports nucleic acid & protein synthesis; enhances axonal regeneration and nerve healing"
    ],
    dosage: "Each tablet contains: Nortriptyline HCL 10mg + Pregabalin 75mg + Methylcobalamin 1500mcg",
    sideEffects: [],
    image: "/images/nurdearNT.webp",
    composition: "Nortriptyline HCL 10mg, Pregabalin 75mg, Methylcobalamin 1500mcg",
    indications: [
      "Epilepsy",
      "Fibromyalgia",
      "Diabetic Neuropathy",
      "Generalized Anxiety Disorder",
      "Peripheral & Central Neuropathy Pain",
      "Adjunctive Therapy for Local Seizures"
    ]
  },
  {
    id: 28,
    name: "Orthodear-G",
    category: "Orthopedic / Joint Support Sachets",
    description: "Orthodear-G is a comprehensive orthopedic support supplement in sachet form. It combines cartilage-regenerating, anti-inflammatory, and antioxidant compounds such as Glucosamine, MSM, Boswellia, Roship Extract, and more to improve joint mobility, reduce pain, and support long-term bone and cartilage health.",
    uses: [
      "Glucosamine HCL: Used parenterally and orally for osteoarthritis symptoms and cartilage regeneration",
      "Methylsulfonylmethane (MSM): Reduces pain, inflammation, allergic symptoms, and supports skin health",
      "Roship Extract: Contains anthocyanins and polyphenols; reduces inflammation and oxidative stress",
      "Boswellia Extract: Reduces joint pain and inflammation in arthritis",
      "Dioscorea Deltoidea Extract: Strong antioxidant properties; supports joint and skin health",
      "Cissus Quadrangularis: Supports healing in fractures, joint strength, and overall bone wellness",
      "Ascorbic Acid (Vitamin C): Aids collagen production and immune health",
      "Curcumin Extract: Manages oxidative and inflammatory conditions",
      "Piperine: Enhances nutrient absorption",
      "Hyaluronic Acid: Increases joint lubrication and improves skin moisture"
    ],
    dosage: "1 sachet daily or as directed by the physician",
    sideEffects: [],
    image: "/images/orthodear.png",
    composition: "Glucosamine HCl 1000mg, Chondroitin 600mg, MSM 1000mg, Roship Extract 2000mg, Boswellia 150mg, Dioscorea Deltoidea 50mg, Cissus Quadrangularis 100mg, Ascorbic Acid 50mg, Curcumin 100mg, Piperine 5mg, Hyaluronic Acid 10mg",
    indications: [
      "Osteoarthritis",
      "Joint pain and stiffness",
      "Cartilage regeneration",
      "Post-exercise inflammation",
      "Bone fractures & healing",
      "Skin & collagen support",
      "Arthritis-related mobility issues"
    ]
  },
  {
    id: 29,
    name: "Pantodear-SR",
    category: "Gastrointestinal",
    description: "Pantodear-SR combines Pantoprazole and Domperidone in sustained-release capsules to provide effective relief from acid reflux, GERD, and associated symptoms. Pantoprazole is a proton pump inhibitor that reduces stomach acid, while Domperidone enhances gastric motility and prevents nausea.",
    uses: [
      "Longer duration of acid inhibition (Pantoprazole)",
      "Prevents mucosal damage",
      "No interaction with antacids",
      "Improves esophageal tone and clearance (Domperidone)",
      "Reduces nausea and vomiting associated with GERD",
      "Effective prokinetic agent for dyspepsia"
    ],
    dosage: "Pantoprazole 40mg + Domperidone 30mg SR | Capsules",
    sideEffects: [],
    image: "/images/pentodear.png",
    composition: "Pantoprazole 40mg, Domperidone 30mg SR",
    indications: [
      "Acid Reflux",
      "Dyspepsia",
      "Severe Acidity",
      "Heart Burn",
      "Peptic Ulcer",
      "Reflux Oesophagitis",
      "Nausea & Vomiting",
      "GERD"
    ]
  },

  {
    id: 716,
    name: "Hepdear S",
    category: "Liver Care",
    description: "Hepdear S is a new sugar-free liver syrup for comprehensive liver support.",
    uses: ["Supports liver function", "Sugar-free formula"],
    dosage: "As directed by physician",
    sideEffects: [],

    image: "/images/hepdear-s.webp", 
    composition: "See pack for details",
    indications: ["Liver disorders", "General liver support"]
  },
  {
    id: 717,
    name: "Uridear-KM",
    category: "Kidney Care",
    description: "Uridear-KM is a comprehensive syrup containing Cranberry Extract, Potassium Magnesium Citrate, D-Mannose, and Hibiscus Extract for urinary tract health.",
    uses: [
      "Prevention and treatment of urinary tract infections (UTIs)",
      "Alkalinize the urine to enhance effect of natural products",
      "Prevent bacteria from adhering to bladder and urethra wall",
      "Prevent bacteria from attaching to urinary tract and bladder lining"
    ],
    dosage: "As directed by physician",
    sideEffects: [],
    image: "/images/neurokm.webp",
    composition: "Cranberry Extract 300mg + Potassium Magnesium Citrate 978mg + D-Mannose 300mg + Hibiscus Extract 200mg",
    indications: [
      "Provide relief from urinary tract infection",
      "Help flush out toxins & excess fluids from the body",
      "Provide relief from burning sensation during urination",
      "Increase urine PH",
      "Prevent the formation growth and aggregation of crystals in kidney",
      "Asymptomatic bacteria in pregnancy"
    ]
  }
];