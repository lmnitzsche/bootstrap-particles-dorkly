# Vieve by DorklyAI - Complete Guide

## 🎮 What is Vieve?

Vieve is a vibrant, geek-culture focused blog platform inspired by Netflix's Tudum. It features content about gaming, sports, pop culture, and food, designed for enthusiasts who love deep dives and hot takes.

**Live Site:** `pages/vieve.html`  
**Color Scheme:** Purple (#9333ea), Pink (#ec4899), Cyan (#06b6d4), Dark (#0f0f0f)  
**Categories:** Gaming, Sports, Pop Culture, Food

---

## 📂 File Structure

```
pages/
├── vieve.html              # Main blog homepage
├── vieve-article.html      # Individual article template
├── vieve-data.js          # Article content database
├── vieve-admin.html       # Admin panel for adding articles
└── VIEVE_GUIDE.md         # This documentation
```

---

## ✍️ How to Add Articles

### Method 1: Using the Admin Panel (Recommended)

1. **Open the admin panel:**
   - Navigate to `pages/vieve-admin.html` in your browser
   - Or open it directly in VS Code Live Server

2. **Fill out the form:**
   - **Title:** Your article headline (e.g., "The Rise of Cozy Gaming")
   - **Category:** Choose from Gaming, Sports, Pop Culture, or Food
   - **Author:** Writer's name (can include nicknames: "Marcus 'Pixel' Chen")
   - **Read Time:** Estimated reading time (e.g., "8 min")
   - **Excerpt:** 1-2 sentence summary for homepage preview
   - **Image URL:** Featured image (use Unsplash: https://unsplash.com)
   - **Content:** Full article in HTML format
   - **Featured:** Check if this should be the hero article

3. **Generate the code:**
   - Click "Generate Article Code"
   - The system creates a properly formatted JavaScript object

4. **Add to database:**
   - Click "Copy to Clipboard"
   - Open `vieve-data.js`
   - Find the `vieveArticles` array
   - Paste your new article object at the **beginning** of the array (after the opening `[`)
   - Make sure there's a comma after your article
   - Save the file

5. **Verify:**
   - Refresh `vieve.html` to see your new article

### Method 2: Manual Editing

Open `vieve-data.js` and add a new article object following this template:

```javascript
{
    id: 1234567890, // Use unique timestamp
    title: "Your Article Title",
    slug: "your-article-title", // Lowercase, hyphenated
    category: "Gaming", // Gaming, Sports, Pop Culture, or Food
    author: "Your Name",
    date: "2025-01-15", // YYYY-MM-DD format
    readTime: "8 min",
    excerpt: "Brief summary for the homepage.",
    image: "https://images.unsplash.com/...", // Image URL
    featured: false, // true for hero article
    content: `
        <p>Your article content here...</p>
        
        <h2>Section Header</h2>
        
        <p>More content...</p>
        
        <ul>
            <li><strong>Point 1:</strong> Description</li>
            <li><strong>Point 2:</strong> Description</li>
        </ul>
    `
},
```

---

## 🎨 Content Formatting Guide

### HTML Structure

Use these tags in your article content:

- **Paragraphs:** `<p>Your text here</p>`
- **Section Headers:** `<h2>Section Title</h2>`
- **Bold Text:** `<strong>Important text</strong>`
- **Lists:**
  ```html
  <ul>
      <li><strong>Header:</strong> Description</li>
      <li><strong>Another:</strong> More info</li>
  </ul>
  ```

### Content Best Practices

1. **Opening Hook (1 paragraph)**
   - Start with an attention-grabbing statement or question
   - Set up the topic and why it matters

2. **Body Sections (3-5 sections)**
   - Use `<h2>` headers for each major section
   - Keep paragraphs 3-5 sentences max
   - Use bullet lists for key points
   - Include specific examples and data when possible

3. **Conclusion (1-2 paragraphs)**
   - Summarize main points
   - End with a forward-looking statement or call to action

### Tone Guidelines

**Vieve's Voice:**
- Energetic and enthusiastic
- Knowledgeable but accessible
- Uses gaming/sports/pop culture references
- Slightly irreverent, fun, but still informative
- Can use emojis sparingly in quotes or casual sections

**Examples:**
- ❌ "This game demonstrates excellent mechanical design."
- ✅ "This game hits different. The mechanics? *Chef's kiss*."

---

## 🖼️ Finding Images

### Recommended Source: Unsplash

1. Go to https://unsplash.com
2. Search for your topic (e.g., "gaming setup", "basketball", "movie theater")
3. Find a high-quality image that fits your article
4. Click the image, then click "Share" or copy the URL
5. Use this format for optimal sizing:
   ```
   https://images.unsplash.com/photo-[ID]?w=800&h=500&fit=crop
   ```

### Image Requirements

- **Dimensions:** Minimum 800x500px
- **Format:** JPEG or PNG
- **Quality:** High resolution, well-lit
- **Relevance:** Should clearly relate to article topic
- **Rights:** Must be copyright-free (Unsplash, Pexels, Pixels)

---

## ⭐ Featured Articles

### How Featured Articles Work

- **Only ONE** article should have `featured: true`
- Featured article appears as the large hero banner on the homepage
- Gets prominent placement with full-width image
- Automatically excluded from "Latest Stories" grid

### Setting a Featured Article

1. **In Admin Panel:**
   - Check the "Mark as Featured Article" checkbox

2. **In vieve-data.js:**
   - Set `featured: true` for your chosen article
   - Set `featured: false` for all other articles

3. **Best Practices:**
   - Choose your most compelling, timely article
   - Update featured article weekly or bi-weekly
   - Use high-quality, eye-catching images for featured pieces

---

## ✏️ Updating Articles

### Edit Existing Article

1. Open `vieve-data.js`
2. Find the article by searching for its title or slug
3. Edit any field (title, content, image, etc.)
4. Save the file
5. Refresh the site to see changes

### Delete an Article

1. Open `vieve-data.js`
2. Find the article object (enclosed in `{ }`)
3. Delete the entire object, including its trailing comma
4. Save the file
5. Refresh the site

**⚠️ Warning:** Deleting an article breaks existing links. Consider keeping old articles but setting `featured: false` instead.

---

## 📊 Categories

### Available Categories

- **Gaming:** Video games, esports, game design, industry news
- **Sports:** Professional sports, analytics, player profiles, team news
- **Pop Culture:** Movies, TV shows, streaming, entertainment
- **Food:** Restaurants, recipes, food trends, culinary culture

### Category Filtering

The homepage includes filter pills that automatically show/hide articles by category. No configuration needed—it works automatically based on the `category` field.

---

## 🔧 Troubleshooting

### Article Not Showing Up

1. **Check vieve-data.js for syntax errors:**
   - Missing commas between articles
   - Unclosed brackets `{ }` or backticks `` ` ``
   - Quotes not properly escaped in content

2. **Verify article structure:**
   - All required fields present (id, title, slug, category, author, date, readTime, excerpt, image, featured, content)
   - Date in YYYY-MM-DD format
   - Image URL valid and accessible

3. **Clear browser cache:**
   - Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### Image Not Loading

- Check image URL is valid
- Ensure URL starts with `https://`
- Try loading URL directly in browser
- Use Unsplash or another reliable CDN

### Formatting Issues

- Make sure HTML tags are properly closed
- Use straight quotes `"` not curly quotes `"`
- Escape special characters in content
- Check that backticks are used for content field

---

## 🚀 Advanced Features

### Social Sharing

Each article automatically includes share buttons for:
- Twitter
- Facebook
- LinkedIn
- Reddit
- Copy Link

No configuration needed—it works automatically!

### Related Articles

Articles automatically show 3 related articles from the same category. If fewer than 3 exist in the category, random articles fill the slots.

### Search Engine Optimization

Each article page dynamically updates:
- Page title: `Article Title | Vieve by DorklyAI`
- Meta description: Uses article excerpt
- Social media previews (when shared)

---

## 🎯 Content Ideas

### Gaming
- Game reviews and retrospectives
- Industry trend analysis
- Developer interviews
- Esports coverage
- Gaming hardware reviews

### Sports
- Game analysis and breakdowns
- Player/team analytics
- Season previews and predictions
- Historical deep dives
- Sports betting trends

### Pop Culture
- Movie/TV reviews
- Streaming recommendations
- Celebrity news analysis
- Fan theory breakdowns
- Entertainment industry trends

### Food
- Restaurant reviews
- Recipe experiments
- Food trend analysis
- Chef profiles
- Culinary culture exploration

---

## 📝 Writing Tips

### Length Guidelines

- **Featured Articles:** 800-1200 words (10-14 min read)
- **Regular Articles:** 500-800 words (6-9 min read)
- **Quick Reads:** 300-500 words (4-5 min read)

### Engagement Hooks

- Start with a surprising statistic
- Ask a provocative question
- Reference current events or trends
- Use pop culture comparisons
- Create urgency ("Why now matters")

### Structure Templates

**Opinion Piece:**
1. Hot take opening
2. Supporting evidence
3. Counter-arguments addressed
4. Conclusion reinforcing position

**Deep Dive:**
1. Context setting
2. Historical background
3. Current state analysis
4. Future implications
5. Key takeaways

**News Analysis:**
1. What happened
2. Why it matters
3. Broader context
4. What's next

---

## 🔗 Integration

### Linking from Main Site

Add Vieve to your main navigation by editing `index.html`:

```html
<a href="pages/vieve.html" class="nav-link">Vieve</a>
```

### Cross-Linking with Blyss

Vieve and Blyss can link to each other in navigation:

```html
<!-- In Vieve nav -->
<a href="blyss.html">Blyss</a>

<!-- In Blyss nav -->
<a href="vieve.html">Vieve</a>
```

---

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `vieve.html` and `vieve-article.html`:

```css
:root {
    --vieve-dark: #0f0f0f;
    --vieve-purple: #9333ea;
    --vieve-pink: #ec4899;
    --vieve-cyan: #06b6d4;
    /* ... other colors ... */
}
```

### Modifying Fonts

Current fonts:
- **Headlines:** Bebas Neue (bold, condensed)
- **Body:** Poppins (modern, readable)

To change, update the Google Fonts link in the `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

---

## 📧 Newsletter Integration

The newsletter signup form is currently a placeholder. To integrate a real email service:

1. Choose a provider (Mailchimp, ConvertKit, Substack, etc.)
2. Get your form action URL
3. Update the form in `vieve.html`:

```html
<form action="YOUR_FORM_URL" method="POST" class="newsletter-form">
    <!-- existing form fields -->
</form>
```

---

## 🐛 Common Errors

### "Article Not Found"

- Slug in URL doesn't match any article's slug field
- Check for typos in slug generation
- Ensure slug is lowercase with hyphens

### "Featured article not showing"

- Multiple articles marked as `featured: true`
- No articles marked as featured
- First article in array should be featured

### "Category filter not working"

- Category name doesn't match exactly (check capitalization)
- JavaScript not loaded properly
- Browser cache needs clearing

---

## 💡 Best Practices

1. **Consistency:** Post on a regular schedule (weekly recommended)
2. **Quality:** Prioritize well-researched, original content
3. **Variety:** Mix categories to appeal to different audiences
4. **Engagement:** Use conversational tone, ask questions
5. **Timeliness:** Cover current events and trending topics
6. **Visuals:** Choose compelling, high-quality images
7. **SEO:** Use descriptive titles and excerpts
8. **Length:** Aim for 7-10 minute reads (700-1000 words)
9. **Structure:** Use headers, lists, and short paragraphs
10. **Voice:** Keep it energetic, knowledgeable, and fun

---

## 🎉 You're All Set!

Vieve is now ready to publish amazing geek culture content. Remember:

- Use the admin panel for easy article creation
- Follow the content formatting guidelines
- Update featured articles regularly
- Keep the tone energetic and fun
- Engage with your audience

**Need help?** Refer back to this guide or check the sample articles in `vieve-data.js` for inspiration.

---

**Created by DorklyAI** | Stay nerdy. 🎮🏀🍿