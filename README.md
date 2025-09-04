# Портфолио Вэбсайтын Загвар

Next.js, TypeScript, болон Tailwind CSS ашиглан бүтээгдсэн орчин үеийн портфолио вэбсайт. Хөгжүүлэгчдэд зориулсан хялбар тохируулах боломжтой мэргэжлийн портфолио.

## 🚀 Хурдан эхлэх заавар

### 1. Татаж авах болон тохируулах

```bash
git clone [таны-репозиторийн-холбоос]
cd portfolio5
npm install
npm run dev
```

### 2. Хувийн мэдээллээ өөрчлөх

Бүх хувийн мэдээллийг нэг файлаас өөрчлөх боломжтой: `config/portfolio-config.tsx`

#### Хувийн мэдээлэл

```typescript
export const personalInfo = {
  name: "Таны бүтэн нэр",
  nickname: "Таны хочид нэр",
  title: "Таны ажлын байр",
  email: "танай.имэйл@example.com",
  phone: "таны-утасны-дугаар",
  location: "Таны хот, улс",
  bio: "Таны товч танилцуулга...",
  longBio: "Таны дэлгэрэнгүй танилцуулга...",
  avatar: "/таны-зураг.jpg", // Зургийг public фолдерт хийнэ үү
  // ... бусад талбарууд
};
```

#### Сошиал медиа холбоосууд

```typescript
export const socialLinks = {
  github: "https://github.com/таны-хэрэглэгчийн-нэр",
  instagram: "https://instagram.com/таны-хэрэглэгчийн-нэр",
  facebook: "https://facebook.com/таны-хэрэглэгчийн-нэр",
  buyMeCoffee: "https://buymeacoffee.com/таны-хэрэглэгчийн-нэр",
  // ... бусад холбоосууд
};
```

#### Ур чадварууд

```typescript
export const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "React", level: 90, color: "#61DAFB" },
      // ... таны ур чадварууд
    ],
  },
];
```

#### Төслүүд

```typescript
export const projects = [
  {
    title: "Таны төслийн нэр",
    description: "Төслийн тайлбар",
    image: "төслийн-зургийн-холбоос",
    technologies: ["React", "Next.js"],
    githubUrl: "github-репо-холбоос",
    demoUrl: "амьд-демо-холбоос",
    // ... бусад талбарууд
  },
];
```

### 3. Зургуудыг солих

- `/public/portfolio.jpg`-г таны зурагаар солино уу
- `/public/rireksho-blank.pdf`-г таны CV/Resume-аар солино уу

### 4. Админ самбар

- `/admin` хуудас руу очиж төслүүдээ динамикаар нэмэх/засварлах
- Анхдагч нууц үг: `admin123` (config файлаас өөрчлөх)

## 📁 Төслийн бүтэц

```
portfolio5/
├── config/
│   └── portfolio-config.tsx    # Бүх тохиргоо энд байна
├── src/
│   ├── app/                   # Next.js app router
│   ├── components/            # React компонентууд
│   └── lib/                   # Utility функцууд
├── public/                    # Статик файлууд
└── ...
```

## 🎨 Тохируулах заавар

### Өнгө болон загвар

`config/portfolio-config.tsx` файлыг засварлана уу:

```typescript
export const themeConfig = {
  primaryColor: "#06B6D4", // Үндсэн өнгө өөрчлөх
  secondaryColor: "#8B5CF6", // Хоёрдогч өнгө өөрчлөх
  // ... бусад загварын тохиргоо
};
```

### Навигацийн цэс

```typescript
export const navigationConfig = {
  menuItems: [
    { id: "home", label: "Нүүр", href: "#home" },
    // ... цэсний зүйлсийг нэмэх/хасах
  ],
};
```

### Холбоо барих мэдээлэл

```typescript
export const contactInfo = [
  {
    label: "Имэйл",
    value: personalInfo.email,
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
  },
  // ... бусад холбоо барих аргууд
];
```

## 🛠 Онцлогууд

- ✅ Бүрэн хариуцагч дизайн
- ✅ Орчин үеийн градиент бүхий харанхуй загвар
- ✅ Framer Motion ашиглан зөөлөн анимаци
- ✅ EmailJS холболттой холбоо барих форм
- ✅ Төсөл удирдах админ самбар
- ✅ Аюулгүй байдлын TypeScript
- ✅ Загварын Tailwind CSS
- ✅ Config файлаар хялбар тохируулга
- ✅ SEO оновчлогдсон

## 📧 Холбоо барих формын тохируулга

### EmailJS Холболт

1. [EmailJS](https://emailjs.com) дээр бүртгэл үүсгэнэ үү
2. Имэйл үйлчилгээ болон загвар үүсгэнэ үү
3. `src/components/contact.tsx` файлд дараах утгуудыг шинэчилнэ үү:

```typescript
emailjs.sendForm(
  "таны_үйлчилгээний_id", // Таны EmailJS үйлчилгээний ID
  "таны_загварын_id", // Таны EmailJS загварын ID
  formRef.current,
  "таны_нийтийн_түлхүүр" // Таны EmailJS нийтийн түлхүүр
);
```

### EmailJS Загварын код

Дараах HTML кодыг EmailJS загварт хуулж оруулна уу:

```html
<!-- baljir.online – Portfolio Contact Email -->
<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  role="presentation"
  style="background:#0b1220;padding:24px 0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;"
>
  <tr>
    <td align="center">
      <table
        width="640"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="width:640px;max-width:94%;background:#0f172a;border:1px solid #24304a;border-radius:12px;overflow:hidden;"
      >
        <!-- Header -->
        <tr>
          <td
            style="background:#111827;padding:20px 24px;border-bottom:1px solid #24304a;"
          >
            <div
              style="color:#e5e7eb;font-size:14px;letter-spacing:.08em;text-transform:uppercase;"
            >
              baljir.online
            </div>
            <div
              style="color:#ffffff;font-size:20px;font-weight:700;line-height:1.4;margin-top:4px;"
            >
              Таны портфолиогоос шинэ мессеж
            </div>
            <div style="color:#9ca3af;font-size:12px;margin-top:6px;">
              Хүлээн авсан: {{current_time}}
            </div>
          </td>
        </tr>

        <!-- Meta -->
        <tr>
          <td style="padding:20px 24px;">
            <table
              width="100%"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
            >
              <tr>
                <td style="padding:6px 0;">
                  <span
                    style="display:inline-block;width:100px;color:#9ca3af;font-size:12px;"
                    >Илгээгч</span
                  >
                  <span style="color:#e5e7eb;font-size:14px;font-weight:600;"
                    >{{name}}</span
                  >
                </td>
              </tr>
              <tr>
                <td style="padding:6px 0;">
                  <span
                    style="display:inline-block;width:100px;color:#9ca3af;font-size:12px;"
                    >Имэйл</span
                  >
                  <a
                    href="mailto:{{email}}"
                    style="color:#93c5fd;text-decoration:none;"
                    >{{email}}</a
                  >
                </td>
              </tr>
              <tr>
                <td style="padding:6px 0;">
                  <span
                    style="display:inline-block;width:100px;color:#9ca3af;font-size:12px;"
                    >Гарчиг</span
                  >
                  <span style="color:#e5e7eb;font-size:14px;">{{subject}}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:6px 0;">
                  <span
                    style="display:inline-block;width:100px;color:#9ca3af;font-size:12px;"
                    >Хуудас</span
                  >
                  <a
                    href="https://baljir.online"
                    style="color:#93c5fd;text-decoration:none;"
                    >baljir.online</a
                  >
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Message -->
        <tr>
          <td style="padding:0 24px 20px;">
            <div
              style="background:#0b1220;border:1px solid #24304a;border-radius:10px;padding:16px 18px;color:#e5e7eb;font-size:14px;line-height:1.7;white-space:pre-line;"
            >
              {{message}}
            </div>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:0 24px 24px;">
            <a
              href="mailto:{{email}}?subject=Re:%20{{subject}}"
              style="display:inline-block;background:#ffffff;color:#111827;font-weight:600;font-size:14px;border-radius:8px;padding:10px 16px;text-decoration:none;"
            >
              {{name}}-д хариулах
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td
            style="background:#0b1220;padding:14px 24px;border-top:1px solid #24304a;color:#9ca3af;font-size:12px;"
          >
            Энэ имэйлийг
            <strong style="color:#e5e7eb;">baljir.online</strong> дээрх холбоо
            барих формоос илгээсэн.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

### Орчны хувьсагчид (шаардлагатай бол)

`.env.local` файл үүсгэнэ үү:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=таны_үйлчилгээний_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=таны_загварын_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=таны_нийтийн_түлхүүр
```

## 🚀 Deployment

### Vercel (Санал болгох)

```bash
npm run build
# Vercel руу deploy хийх
```

### Бусад платформууд

```bash
npm run build
# `out` фолдерийг таны хостинг үйлчилгээ рүү upload хийх
```

## 🐛 Асуудал шийдвэрлэх

### Төслүүд харагдахгүй байна уу?

- Браузерын консолоос алдаа шалгана уу
- Config файл дахь `projects` массивыг шалгана уу
- localStorage цэвэрлэнэ үү: `localStorage.clear()`

### Зургууд ачаалагдахгүй байна уу?

- Зургууд `public/` фолдерт байгаа эсэхийг шалгана уу
- Файлын замууд зөв эсэхийг шалгана уу
- Зургийн URL хүртээмжтэй эсэхийг шалгана уу

### Холбоо барих форм ажиллахгүй байна уу?

- EmailJS тохиргоог шалгана уу
- Үйлчилгээний ID, загварын ID, нийтийн түлхүүрийг шалгана уу
- Браузерын консолоос алдаа шалгана уу

## 📝 Лиценз

MIT License - энэ загварыг өөрийн портфолиодоо чөлөөтэй ашиглаж болно!

---

**© 2025 Baljir - Хувийн портфолио**
