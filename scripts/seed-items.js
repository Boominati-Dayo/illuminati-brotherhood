const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    mysticalProperties: { type: String },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const Item = mongoose.models.Item || mongoose.model('Item', ItemSchema);

const artifacts = [
    {
        name: "Eternal Flame Lamp",
        price: 25000,
        description: "An ancient lamp said to contain the essence of perpetual illumination. Passed down through generations of the order.",
        mysticalProperties: "Provides clarity of thought and guides the bearer toward truth in times of darkness.",
    },
    {
        name: "Sacred Chalice of Wisdom",
        price: 45000,
        description: "A ceremonial chalice used in the highest rituals of induction. Embodies the flowing wisdom of the ancients.",
        mysticalProperties: "Enhances intellectual pursuits and opens hidden pathways of knowledge.",
    },
    {
        name: "Obsidian Mirror of Truth",
        price: 35000,
        description: "A polished obsidian mirror housed in ornate gold frame. Used for scrying the hidden truths.",
        mysticalProperties: "Reveals deception and exposes the true nature of those who gaze upon it.",
    },
    {
        name: "Phoenix Feather Scroll",
        price: 55000,
        description: "Ancient parchment inscribed with sacred wisdom. The feather of the mythical phoenix ensures its preservation.",
        mysticalProperties: "Grants the bearer visions of future events and protects against harm.",
    },
    {
        name: "Celestial Astrolabe",
        price: 75000,
        description: "A precision instrument mapping the movements of celestial bodies. Used to determine auspicious timings.",
        mysticalProperties: "Aligns the bearer's destiny with the cosmic forces of the universe.",
    },
    {
        name: "Serpent Ring of Power",
        price: 95000,
        description: "An ancient ring crafted in the shape of a serpent, symbolizing eternity and transformation.",
        mysticalProperties: "Grants authority and influence over others. Protects the bearer from poisoning and disease.",
    },
    {
        name: "Ark of the Covenant Relic",
        price: 150000,
        description: "A sacred chest containing divine manifestations. One of the most protected artifacts in existence.",
        mysticalProperties: "Bestows extraordinary blessings upon those deemed worthy of its presence.",
    },
    {
        name: "Holy Grail of Immortality",
        price: 500000,
        description: "The legendary chalice said to grant eternal life to those who drink from it. The ultimate artifact.",
        mysticalProperties: "Grants immortality and eternal youth. Aligns the soul with eternal light.",
    },
];

async function seed() {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
        console.error('MONGODB_URI not set');
        process.exit(1);
    }
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    await Item.deleteMany({});
    console.log('Cleared existing items');

    await Item.insertMany(artifacts);
    console.log(`Added ${artifacts.length} artifacts`);

    await mongoose.disconnect();
    console.log('Done!');
}

seed().catch(console.error);