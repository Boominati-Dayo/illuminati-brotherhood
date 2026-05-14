const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
envContent.split('\n').forEach(line => {
    if (line.includes('=') && !line.startsWith('#')) {
        const [key, ...value] = line.split('=');
        process.env[key.trim()] = value.join('=').trim();
    }
});

const mongoose = require('mongoose');

const PaymentMethodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    details: { type: String },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
});

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    mysticalProperties: { type: String },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const PaymentMethod = mongoose.models.PaymentMethod || mongoose.model('PaymentMethod', PaymentMethodSchema);
const Item = mongoose.models.Item || mongoose.model('Item', ItemSchema);

const artifacts = [
    { name: "Eternal Flame Lamp", price: 25000, description: "An ancient lamp said to contain the essence of perpetual illumination.", mysticalProperties: "Provides clarity of thought." },
    { name: "Sacred Chalice of Wisdom", price: 45000, description: "A ceremonial chalice used in the highest rituals of induction.", mysticalProperties: "Enhances intellectual pursuits." },
    { name: "Obsidian Mirror of Truth", price: 35000, description: "A polished obsidian mirror for scrying hidden truths.", mysticalProperties: "Reveals deception." },
    { name: "Phoenix Feather Scroll", price: 55000, description: "Ancient parchment with sacred wisdom.", mysticalProperties: "Grants visions of future events." },
    { name: "Celestial Astrolabe", price: 75000, description: "Maps celestial body movements.", mysticalProperties: "Aligns destiny with cosmic forces." },
    { name: "Serpent Ring of Power", price: 95000, description: "Ancient ring symbolizing eternity.", mysticalProperties: "Grants authority and protection." },
    { name: "Ark of the Covenant Relic", price: 150000, description: "Sacred chest containing divine manifestations.", mysticalProperties: "Bestows extraordinary blessings." },
    { name: "Holy Grail of Immortality", price: 500000, description: "Legendary chalice granting eternal life.", mysticalProperties: "Grants immortality and eternal youth." },
];

const paymentMethods = [
    { name: "Bitcoin", description: "Cryptocurrency transfer", details: "Bitcoin wallet address provided after order confirmation" },
    { name: "Western Union", description: "Global money transfer", details: "Transfer to nearest Western Union location" },
    { name: "Bank Transfer", description: "Direct bank transfer", details: "International wire transfer details provided after order" },
];

async function seed() {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
        console.error('MONGODB_URI not set in .env.local');
        process.exit(1);
    }
    
    try {
        await mongoose.connect(mongoUri);
        console.log('Connected to MongoDB');

        await Item.deleteMany({});
        await PaymentMethod.deleteMany({});
        console.log('Cleared existing data');

        await Item.insertMany(artifacts);
        console.log(`Added ${artifacts.length} artifacts`);

        await PaymentMethod.insertMany(paymentMethods);
        console.log(`Added ${paymentMethods.length} payment methods`);

        console.log('\nDone! All items added successfully.');
    } catch (err) {
        console.error('Error:', err.message);
    } finally {
        await mongoose.disconnect();
    }
}

seed();