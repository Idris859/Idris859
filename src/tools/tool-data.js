export const categories = [
  { key: 'image-tools', label: 'Image Tools' },
  { key: 'text-tools', label: 'Text Tools' },
  { key: 'developer-tools', label: 'Developer Tools' },
  { key: 'calculators', label: 'Calculators' },
  { key: 'security-tools', label: 'Security Tools' }
];

export const tools = [
  { slug: 'image-resizer', name: 'Image Resizer', category: 'image-tools', desc: 'Resize images in-browser with Canvas.', implemented: true, popular: true },
  { slug: 'image-compressor', name: 'Image Compressor', category: 'image-tools', desc: 'Compress JPG/WEBP images with adjustable quality.', implemented: true, popular: true },
  { slug: 'image-converter', name: 'Image Converter', category: 'image-tools', desc: 'Convert image format to PNG, JPG, or WEBP.', implemented: true },
  { slug: 'image-cropper', name: 'Image Cropper', category: 'image-tools', desc: 'Crop image by setting x/y and width/height.', implemented: true },
  { slug: 'base64-image-converter', name: 'Base64 Image Converter', category: 'image-tools', desc: 'Encode/decode images as Base64 strings.', implemented: true },
  { slug: 'image-rotator', name: 'Image Rotator', category: 'image-tools', desc: 'Rotate image quickly in your browser.', implemented: false },
  { slug: 'image-flipper', name: 'Image Flipper', category: 'image-tools', desc: 'Flip image horizontally or vertically.', implemented: false },
  { slug: 'image-watermark', name: 'Image Watermark', category: 'image-tools', desc: 'Add text watermark to images.', implemented: false },
  { slug: 'image-to-pdf', name: 'Image to PDF', category: 'image-tools', desc: 'Bundle multiple images into a PDF.', implemented: false },
  { slug: 'photo-filter', name: 'Photo Filter', category: 'image-tools', desc: 'Apply basic visual filters to photos.', implemented: false },

  { slug: 'word-counter', name: 'Word Counter', category: 'text-tools', desc: 'Count words, characters, lines, and reading time.', implemented: true, popular: true },
  { slug: 'case-converter', name: 'Case Converter', category: 'text-tools', desc: 'Convert text to upper, lower, title, or sentence case.', implemented: true },
  { slug: 'text-sorter', name: 'Text Sorter', category: 'text-tools', desc: 'Sort text lines ascending or descending.', implemented: true },
  { slug: 'remove-duplicate-lines', name: 'Remove Duplicate Lines', category: 'text-tools', desc: 'Remove duplicate lines while preserving order.', implemented: true },
  { slug: 'find-replace', name: 'Find and Replace', category: 'text-tools', desc: 'Replace specific strings in a large text.', implemented: false },
  { slug: 'lorem-ipsum-generator', name: 'Lorem Ipsum Generator', category: 'text-tools', desc: 'Generate placeholder paragraphs instantly.', implemented: false },
  { slug: 'reverse-text', name: 'Reverse Text', category: 'text-tools', desc: 'Reverse words or full string.', implemented: false },
  { slug: 'text-diff', name: 'Text Diff Checker', category: 'text-tools', desc: 'Compare two text blocks.', implemented: false },
  { slug: 'remove-extra-spaces', name: 'Remove Extra Spaces', category: 'text-tools', desc: 'Normalize repeated spaces and blank lines.', implemented: false },
  { slug: 'slug-generator', name: 'Slug Generator', category: 'text-tools', desc: 'Generate URL-friendly slugs.', implemented: false },

  { slug: 'json-formatter', name: 'JSON Formatter', category: 'developer-tools', desc: 'Format and validate JSON with indentation.', implemented: true, popular: true },
  { slug: 'base64-encoder-decoder', name: 'Base64 Encoder/Decoder', category: 'developer-tools', desc: 'Encode and decode text using Base64.', implemented: true },
  { slug: 'url-encoder-decoder', name: 'URL Encoder/Decoder', category: 'developer-tools', desc: 'Encode/decode URL components.', implemented: true },
  { slug: 'color-converter', name: 'Color Converter', category: 'developer-tools', desc: 'Convert HEX, RGB, and HSL colors.', implemented: true },
  { slug: 'timestamp-converter', name: 'Timestamp Converter', category: 'developer-tools', desc: 'Unix and ISO date conversion.', implemented: false },
  { slug: 'html-minifier', name: 'HTML Minifier', category: 'developer-tools', desc: 'Compress HTML output size.', implemented: false },
  { slug: 'css-minifier', name: 'CSS Minifier', category: 'developer-tools', desc: 'Minify CSS rules safely.', implemented: false },
  { slug: 'js-minifier', name: 'JS Minifier', category: 'developer-tools', desc: 'Minify JavaScript code.', implemented: false },
  { slug: 'regex-tester', name: 'Regex Tester', category: 'developer-tools', desc: 'Test regex with live matches.', implemented: false },
  { slug: 'uuid-generator', name: 'UUID Generator', category: 'developer-tools', desc: 'Generate random UUIDs quickly.', implemented: false },

  { slug: 'age-calculator', name: 'Age Calculator', category: 'calculators', desc: 'Calculate exact age in years, months, and days.', implemented: true, popular: true },
  { slug: 'percentage-calculator', name: 'Percentage Calculator', category: 'calculators', desc: 'Compute percentages and differences.', implemented: true },
  { slug: 'emi-calculator', name: 'EMI Calculator', category: 'calculators', desc: 'Estimate loan monthly payment.', implemented: false },
  { slug: 'bmi-calculator', name: 'BMI Calculator', category: 'calculators', desc: 'Calculate body mass index.', implemented: false },
  { slug: 'gst-calculator', name: 'GST Calculator', category: 'calculators', desc: 'Add or remove GST tax values.', implemented: false },
  { slug: 'discount-calculator', name: 'Discount Calculator', category: 'calculators', desc: 'Calculate discounted prices.', implemented: false },
  { slug: 'loan-calculator', name: 'Loan Calculator', category: 'calculators', desc: 'Interest and repayment estimation.', implemented: false },
  { slug: 'sip-calculator', name: 'SIP Calculator', category: 'calculators', desc: 'Estimate SIP investment growth.', implemented: false },
  { slug: 'scientific-calculator', name: 'Scientific Calculator', category: 'calculators', desc: 'Perform advanced arithmetic operations.', implemented: false },
  { slug: 'time-zone-calculator', name: 'Time Zone Calculator', category: 'calculators', desc: 'Convert time between major cities.', implemented: false },

  { slug: 'password-generator', name: 'Password Generator', category: 'security-tools', desc: 'Generate strong customizable passwords.', implemented: true, popular: true },
  { slug: 'sha256-generator', name: 'SHA256 Generator', category: 'security-tools', desc: 'Generate SHA-256 hash in browser.', implemented: true },
  { slug: 'md5-generator', name: 'MD5 Generator', category: 'security-tools', desc: 'Create MD5 hash for strings.', implemented: false },
  { slug: 'bcrypt-generator', name: 'Bcrypt Generator', category: 'security-tools', desc: 'Generate bcrypt hashes locally.', implemented: false },
  { slug: 'jwt-decoder', name: 'JWT Decoder', category: 'security-tools', desc: 'Decode JWT payload locally.', implemented: false },
  { slug: 'password-strength-checker', name: 'Password Strength Checker', category: 'security-tools', desc: 'Analyze password quality.', implemented: false },
  { slug: 'random-string-generator', name: 'Random String Generator', category: 'security-tools', desc: 'Generate secure random tokens.', implemented: false },
  { slug: 'hmac-generator', name: 'HMAC Generator', category: 'security-tools', desc: 'Generate HMAC signatures.', implemented: false },
  { slug: 'rsa-key-generator', name: 'RSA Key Generator', category: 'security-tools', desc: 'Generate RSA keys in browser.', implemented: false },
  { slug: 'url-safety-check', name: 'URL Safety Checker', category: 'security-tools', desc: 'Check URL safety syntax patterns.', implemented: false },

  { slug: 'meta-tag-generator', name: 'Meta Tag Generator', category: 'developer-tools', desc: 'Generate SEO meta tag templates.', implemented: false },
  { slug: 'favicon-generator', name: 'Favicon Generator', category: 'image-tools', desc: 'Generate favicon sizes quickly.', implemented: false },
  { slug: 'unit-converter', name: 'Unit Converter', category: 'calculators', desc: 'Convert distance, weight, and temperature.', implemented: false },
  { slug: 'ip-subnet-calculator', name: 'IP Subnet Calculator', category: 'developer-tools', desc: 'Compute subnet ranges and masks.', implemented: false },
  { slug: 'keyword-density-checker', name: 'Keyword Density Checker', category: 'text-tools', desc: 'Measure keyword frequency.', implemented: false }
];

export const getToolBySlug = (slug) => tools.find((tool) => tool.slug === slug);
