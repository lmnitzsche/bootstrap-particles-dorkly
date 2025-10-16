# Blyss by DorklyAI - Content Management Guide

## 📚 Overview

Blyss is a dynamic content platform featuring articles on Business, Finance, Technology, Philosophy, and Theology. The system uses a simple JavaScript-based content management system for easy article creation and updates.

## 🗂️ File Structure

```
pages/
├── blyss.html          # Main blog homepage
├── article.html        # Individual article template
├── blyss-data.js       # Article content database
└── blyss-admin.html    # Admin interface for adding articles
```

## ✨ Features

- **10 Pre-Written Articles**: Fully written, ready-to-publish content across all categories
- **Dynamic Loading**: Articles automatically populate on the homepage
- **Category Filtering**: Filter articles by Business, Finance, Technology, Philosophy, or Theology
- **Individual Article Pages**: Clean, readable article layout with sharing options
- **Related Articles**: Automatically shows related content
- **SEO-Friendly URLs**: Article slugs for clean URLs
- **Responsive Design**: Beautiful on all devices

## 📝 How to Add New Articles

### Method 1: Using the Admin Interface (Recommended)

1. **Open the Admin Panel**:
   - Navigate to `pages/blyss-admin.html` in your browser
   - Or visit: `https://yourdomain.com/pages/blyss-admin.html`

2. **Fill Out the Form**:
   - **Title**: Your article headline
   - **Category**: Choose from Business, Finance, Technology, Philosophy, or Theology
   - **Author**: Writer's name
   - **Read Time**: Estimated time (e.g., "8 min")
   - **Featured**: Set to "Yes" if this should be the hero article
   - **Excerpt**: 150-200 character summary for article cards
   - **Image URL**: Use Unsplash for high-quality free images
   - **Content**: Write your article using HTML tags

3. **Generate the Code**:
   - Click "Generate Article Code"
   - The system creates properly formatted JavaScript

4. **Add to Database**:
   - Copy the generated code
   - Open `blyss-data.js`
   - Find the `blyssArticles` array
   - Paste the new article object (add a comma after the previous article)
   - **Important**: Update the `id` to be sequential (check the last article's ID and add 1)

5. **Publish**:
   - Save `blyss-data.js`
   - Refresh `blyss.html` to see your new article!

### Method 2: Manual Editing

Open `blyss-data.js` and add a new article object to the `blyssArticles` array:

```javascript
{
    id: 11, // Next sequential ID
    title: "Your Article Title",
    slug: "your-article-title",
    category: "Business",
    author: "Your Name",
    date: "2025-10-16",
    readTime: "7 min",
    excerpt: "A compelling summary of your article...",
    image: "https://images.unsplash.com/photo-xxxxx",
    featured: false,
    content: `
        <p>Your article content here...</p>
        
        <h2>Section Heading</h2>
        <p>More content...</p>
        
        <ul>
            <li><strong>Point 1:</strong> Details</li>
            <li><strong>Point 2:</strong> More details</li>
        </ul>
    `
}
```

## 🎨 Content Formatting Guide

### HTML Tags You Can Use:

```html
<p>Regular paragraph text</p>

<h2>Main Section Heading</h2>
<h3>Subsection Heading</h3>

<ul>
    <li>Bullet point</li>
    <li><strong>Bold text:</strong> Regular text</li>
</ul>

<ol>
    <li>Numbered item 1</li>
    <li>Numbered item 2</li>
</ol>

<blockquote>
    A pull quote or important statement
</blockquote>

<strong>Bold text</strong>
<em>Italic text</em>
```

## 🖼️ Finding Images

**Recommended Source: Unsplash**
- Visit: https://unsplash.com
- Search for relevant images
- Click an image → Click "Download" → Copy the URL
- Format: `https://images.unsplash.com/photo-xxxxx?w=800&h=500&fit=crop`

**Image Guidelines:**
- Use landscape orientation (16:9 ratio ideal)
- High resolution (at least 1200px wide)
- Relevant to article topic
- Professional quality

## 🏷️ Setting Featured Articles

Only ONE article should have `featured: true`. This article appears as the large hero banner on the homepage.

To change the featured article:
1. Open `blyss-data.js`
2. Find the current featured article (where `featured: true`)
3. Change it to `featured: false`
4. Find your new featured article
5. Change it to `featured: true`
6. Save the file

## 📊 Article Order

Articles are automatically sorted by date (newest first). To control order:
- Update the `date` field
- Format: "YYYY-MM-DD" (e.g., "2025-10-16")
- Newer dates appear first

## 🔄 Updating Existing Articles

1. Open `blyss-data.js`
2. Find the article by searching for its title or slug
3. Edit any field (title, content, image, etc.)
4. Save the file
5. Changes appear immediately on refresh

## 🗑️ Deleting Articles

1. Open `blyss-data.js`
2. Find the article object (including its opening `{` and closing `}`)
3. Delete the entire object
4. Make sure there are no syntax errors (commas between objects)
5. Save the file

## ✅ Best Practices

### Article Length:
- **Short**: 500-800 words (5-6 min read)
- **Medium**: 800-1500 words (7-10 min read)
- **Long**: 1500+ words (11+ min read)

### Titles:
- Keep under 60 characters
- Make them compelling and specific
- Use action words or questions
- Examples:
  - ✅ "How AI is Transforming Finance in 2025"
  - ✅ "The Stoic Leader's Guide to Crisis Management"
  - ❌ "AI Article"
  - ❌ "Some Thoughts on Philosophy"

### Excerpts:
- 150-200 characters ideal
- Hook the reader immediately
- Mention the benefit or insight
- Don't end with ellipsis (...)

### Content Structure:
1. Opening paragraph: Hook and context
2. 3-5 main sections with H2 headings
3. Use bullet points for lists
4. Include specific examples or data
5. Strong conclusion with takeaway

## 🚀 Publishing Workflow

1. **Draft**: Write article in admin panel or text editor
2. **Generate**: Use admin panel to create code
3. **Add**: Paste into `blyss-data.js`
4. **Review**: Check on local version first
5. **Publish**: Push to production
6. **Share**: Distribute article link

## 🔗 Article URLs

Articles use this URL format:
```
https://yourdomain.com/pages/article.html?article=your-article-slug
```

The slug is auto-generated from the title (lowercase, hyphens for spaces).

## 📱 Sharing Features

Each article includes built-in sharing buttons for:
- Twitter
- LinkedIn
- Facebook
- Copy Link

## 🎯 Categories

Current categories:
- **Business**: Strategy, leadership, operations
- **Finance**: Investing, markets, economics
- **Technology**: AI, software, innovation
- **Philosophy**: Ethics, wisdom, thought
- **Theology**: Faith, meaning, spirituality

To add a new category:
1. Add option in `blyss-admin.html` (category dropdown)
2. Add filter pill in `blyss.html` (category pills section)
3. Add footer link in `blyss.html` (footer categories)

## 🆘 Troubleshooting

**Articles not showing?**
- Check for JavaScript errors in browser console (F12)
- Verify `blyss-data.js` is loading
- Check for syntax errors (missing commas, quotes)

**Images not loading?**
- Verify URL is correct and publicly accessible
- Try opening image URL in new tab
- Use Unsplash or Imgur for reliable hosting

**Formatting broken?**
- Check HTML tags are properly closed
- Use the admin panel's sample content as template
- Validate HTML syntax

## 📈 Growth Strategy

As you add more articles:
1. Keep 1 featured article (update weekly/monthly)
2. Aim for 2-4 new articles per month
3. Mix categories for diverse content
4. Update old articles to keep them fresh
5. Monitor which categories perform best

## 🔐 Admin Panel Access

The admin panel (`blyss-admin.html`) is a client-side tool. For security:
- Don't link to it from public pages
- Consider password protection
- Or keep it on your local machine only

## 💡 Content Ideas

**Business**: Case studies, leadership lessons, productivity hacks, industry analysis
**Finance**: Investment strategies, market trends, fintech innovations, economic insights
**Technology**: Product reviews, tech explainers, future predictions, tool comparisons
**Philosophy**: Life lessons, ethical dilemmas, thought experiments, wisdom application
**Theology**: Faith & work, ethical frameworks, meaning & purpose, spiritual practices

---

## Quick Start Checklist

- [ ] Open `blyss-admin.html` in browser
- [ ] Fill out article form
- [ ] Click "Generate Article Code"
- [ ] Copy generated code
- [ ] Open `blyss-data.js`
- [ ] Paste code into `blyssArticles` array
- [ ] Update ID to next sequential number
- [ ] Save file
- [ ] Refresh `blyss.html`
- [ ] Celebrate! 🎉

---

**Need Help?** Check the sample articles in `blyss-data.js` for formatting examples.

**Pro Tip**: Use the "Load Sample Content" button in the admin panel to see proper HTML formatting.