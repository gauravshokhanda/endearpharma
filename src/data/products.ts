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
}

export const products: Product[] = [
  {
    id: 1,
    name: "MediRelief",
    category: "Pain Management",
    description: "Fast-acting pain relief medication designed to alleviate moderate to severe pain. MediRelief is formulated with our advanced pain-blocking technology for quick and effective results.",
    uses: ["Headache", "Muscle pain", "Joint pain", "Dental pain", "Menstrual cramps"],
    dosage: "Adults: 1-2 tablets every 6-8 hours, not exceeding 6 tablets in 24 hours. Children (12+ years): 1 tablet every 8 hours.",
    sideEffects: ["Nausea", "Dizziness", "Drowsiness", "Upset stomach"],
    image: "https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg",
    composition: "Paracetamol 500mg, Caffeine 65mg"
  },
  {
    id: 2,
    name: "BroncoEase",
    category: "Respiratory",
    description: "An effective bronchodilator that helps open up the airways, making breathing easier for patients with respiratory conditions.",
    uses: ["Asthma", "Bronchitis", "COPD", "Breathing difficulties"],
    dosage: "Adults: 1 inhalation twice daily. Severe cases may require up to 2 inhalations twice daily as prescribed by physician.",
    sideEffects: ["Dry mouth", "Throat irritation", "Headache", "Increased heart rate"],
    image: "https://images.pexels.com/photos/139398/himalayas-mountains-nepal-himalaya-139398.jpeg",
    composition: "Salbutamol 100mcg/dose, Fluticasone propionate 250mcg/dose"
  },
  {
    id: 3,
    name: "CardioHealth",
    category: "Cardiovascular",
    description: "A comprehensive heart health supplement designed to support cardiovascular function and maintain healthy cholesterol levels.",
    uses: ["Maintain blood pressure", "Support heart function", "Regulate cholesterol levels"],
    dosage: "Adults: 1 tablet daily with meals, or as directed by your healthcare provider.",
    sideEffects: ["Mild gastrointestinal discomfort", "Nausea in sensitive individuals"],
    image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg",
    composition: "Omega-3 fatty acids 1000mg, Coenzyme Q10 100mg, Vitamin E 100IU"
  },
  {
    id: 4,
    name: "ImmunoBoost",
    category: "Immunity",
    description: "Advanced immunity support supplement that helps strengthen the body's natural defenses against infections and illnesses.",
    uses: ["Boost immune system", "Prevent common cold and flu", "Reduce recovery time"],
    dosage: "Adults: 1 tablet daily. During illness: 1 tablet twice daily for up to 7 days.",
    sideEffects: ["Rarely causes stomach upset in sensitive individuals"],
    image: "https://images.pexels.com/photos/4030914/pexels-photo-4030914.jpeg",
    composition: "Vitamin C 1000mg, Zinc 15mg, Elderberry extract 150mg, Echinacea 100mg"
  },
  {
    id: 5,
    name: "DigestiCare",
    category: "Gastrointestinal",
    description: "A comprehensive digestive health medication that relieves symptoms of acid reflux, heartburn, and indigestion quickly and effectively.",
    uses: ["Heartburn", "Acid reflux", "Indigestion", "Stomach discomfort"],
    dosage: "Adults: 1 tablet 30-60 minutes before meals, up to 3 times daily. Do not exceed 3 tablets in 24 hours.",
    sideEffects: ["Constipation", "Headache", "Nausea", "Diarrhea (rare)"],
    image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg",
    composition: "Omeprazole 20mg, Simethicone 125mg"
  },
  {
    id: 6,
    name: "SleepWell",
    category: "Sleep Aid",
    description: "A natural sleep aid that promotes restful sleep without morning grogginess. Helps regulate sleep cycles and improve sleep quality.",
    uses: ["Insomnia", "Jet lag", "Restless sleep", "Sleep disturbances"],
    dosage: "Adults: 1 tablet 30 minutes before bedtime. Not recommended for children under 18 years.",
    sideEffects: ["Rarely causes vivid dreams", "Mild headache in some individuals"],
    image: "https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg",
    composition: "Melatonin 3mg, Valerian root extract 200mg, L-theanine 100mg, Magnesium 50mg"
  },
  {
    id: 7,
    name: "GlucoBalance",
    category: "Metabolic",
    description: "An advanced formula designed to help maintain healthy blood sugar levels and support metabolic function.",
    uses: ["Support blood sugar regulation", "Enhance insulin sensitivity", "Support metabolic health"],
    dosage: "Adults: 1 tablet twice daily with meals, or as directed by your healthcare provider.",
    sideEffects: ["Occasional gastrointestinal discomfort", "Metallic taste (rare)"],
    image: "https://images.pexels.com/photos/7447022/pexels-photo-7447022.jpeg",
    composition: "Chromium picolinate 200mcg, Alpha-lipoic acid 300mg, Cinnamon extract 250mg"
  },
  {
    id: 8,
    name: "JointFlex",
    category: "Musculoskeletal",
    description: "A comprehensive joint health supplement that helps reduce inflammation, supports cartilage repair, and improves joint mobility.",
    uses: ["Joint pain relief", "Arthritis symptoms", "Improved mobility", "Cartilage support"],
    dosage: "Adults: 2 tablets daily with meals for the first month, then 1 tablet daily for maintenance.",
    sideEffects: ["Mild stomach discomfort", "Allergic reactions in shellfish-allergic individuals (contains glucosamine)"],
    image: "https://images.pexels.com/photos/8544979/pexels-photo-8544979.jpeg",
    composition: "Glucosamine sulfate 1500mg, Chondroitin sulfate 1200mg, MSM 1000mg, Turmeric extract 200mg"
  },
  {
    id: 9,
    name: "CalmMind",
    category: "Mental Health",
    description: "An advanced anti-anxiety and mood support supplement that helps promote calmness and mental clarity without drowsiness.",
    uses: ["Reduce anxiety", "Improve mood", "Manage stress", "Enhance focus"],
    dosage: "Adults: 1 capsule twice daily with meals, or as directed by your healthcare provider.",
    sideEffects: ["Mild drowsiness in sensitive individuals", "Vivid dreams occasionally reported"],
    image: "https://images.pexels.com/photos/3421920/pexels-photo-3421920.jpeg",
    composition: "GABA 500mg, L-theanine 200mg, Ashwagandha extract 300mg, Rhodiola rosea 150mg"
  },
  {
    id: 10,
    name: "DermaClear",
    category: "Dermatological",
    description: "A topical treatment designed to clear acne and prevent future breakouts while soothing and repairing damaged skin.",
    uses: ["Acne treatment", "Reduces inflammation", "Prevents breakouts", "Repairs skin barrier"],
    dosage: "Apply a thin layer to affected areas 1-2 times daily after cleansing. Avoid eye area.",
    sideEffects: ["Dryness", "Mild peeling", "Temporary redness", "Sensitivity to sunlight"],
    image: "https://images.pexels.com/photos/3735615/pexels-photo-3735615.jpeg",
    composition: "Salicylic acid 2%, Niacinamide 4%, Tea tree oil 1%, Hyaluronic acid 0.5%"
  }
];