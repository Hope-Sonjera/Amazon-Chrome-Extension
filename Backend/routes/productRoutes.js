const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const puppeteer = require('puppeteer');

// Scrape Amazon product data
router.get('/scrape', async (req, res) => {
  try {
    // Use Puppeteer to scrape Amazon product data
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.amazon.com/');

    // Implement scraping logic
    await browser.close();

    res.status(200).json({ message: 'Scraping successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new product
router.post('/products', async (req, res) => {
  try {
    const { name, price, url, description } = req.body;

    // Create a new product
    const product = new Product({
      name,
      price,
      url,
      description,
    });

    // Save the product to the database
    await product.save();

    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single product by ID
router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a product by ID
router.put('/products/:id', async (req, res) => {
  try {
    const { name, price, url, description } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, url, description },
      { new: true } // Return the updated product
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product updated successfully', product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a product by ID
router.delete('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully', product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
