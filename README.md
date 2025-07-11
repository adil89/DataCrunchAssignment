# Design System Project

A comprehensive React-based design system built with TypeScript, implementing Atomic Design principles and featuring complete internationalization support.

## 🚀 Quick Start

### Prerequisites
- Node.js (v20.13.1 or higher)
- npm or yarn package manager

### Installation & Running
```bash
# Clone the repository
git clone <repository-url>
cd DataCrunchAssignment

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

## 📁 Project Structure

This project follows **Atomic Design** principles, organizing components into atoms, molecules, and organisms:

```
src/
├── components/
│   ├── atoms/                    # Basic building blocks
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.css
│   │   │   └── Button.types.ts
│   │   ├── Icons/
│   │   │   └── Icons.tsx
│   │   ├── Input/
│   │   │   ├── Input.tsx
│   │   │   └── Input.module.css
│   │   └── LanguageSelector/
│   │       ├── LanguageSelector.tsx
│   │       └── LanguageSelector.module.css
│   ├── molecules/                # Simple combinations of atoms
│   │   ├── NumberInput/
│   │   │   ├── NumberInput.tsx
│   │   │   └── NumberInput.module.css
│   │   ├── Slider/
│   │   │   ├── Slider.tsx
│   │   │   └── Slider.module.css
│   │   └── Tabs/
│   │       ├── Tabs.tsx
│   │       └── Tabs.module.css
│   └── organisms/                # Complex UI components
│       └── DataForm/
│           ├── DataForm.tsx
│           └── DataForm.module.css
├── forms/                        # Form implementations
│   └── DemoForm/
│       ├── DemoForm.tsx
│       └── DemoForm.module.css
├── i18n/                         # Internationalization
│   ├── i18n.ts
│   └── locales/
│       ├── en.json
│       └── es.json
├── styles/                       # Global styles
│   └── colors.css
├── App.tsx                       # Main application component
├── App.module.css
├── main.tsx                      # Application entry point
└── index.css                     # Global styles
```

## 🧩 Component Architecture

### Atomic Design Principles

#### **Atoms** (Basic Building Blocks)
- **Button**: Reusable button component with multiple variants
  - Variants: `primary-contained`, `primary-outlined`, `secondary-contained`, `secondary-outlined`
  - Sizes: `small`, `medium`, `mini`, `customSize`
  - States: hover, focus, disabled, with icons
- **Input**: Basic text input with validation states
- **Icons**: SVG icon components (Plus, Minus, Trash)
- **LanguageSelector**: Dropdown for language switching

#### **Molecules** (Simple Combinations)
- **NumberInput**: Combines Input + Button components for numeric input
- **Slider**: Interactive range slider with value display
- **Tabs**: Tab navigation system with dynamic content

#### **Organisms** (Complex Components)
- **DataForm**: Complete form combining multiple molecules and atoms
  - Form validation
  - State management
  - Submit/clear functionality

## 🎨 Design System Features

### Color System
Centralized color management using CSS custom properties:
```css
:root {
  --primary-500: #4F8395;
  --primary-100: rgba(79, 131, 149, 0.1);
  --neutral-300: #D1D5DB;
  --neutral-400: #9CA3AF;
  /* ... more colors */
}
```

### Component Specifications
- **Input**: Fixed dimensions (178px × 32px)
- **Button**: Multiple sizes with consistent spacing
- **NumberInput**: Composition-based design using Input + mini Buttons
- **Slider**: Custom styled with proper accessibility

## 🌍 Internationalization (i18n)

### Supported Languages
- 🇺🇸 English (default)
- 🇪🇸 Spanish

### Language Files
- `src/i18n/locales/en.json` - English translations
- `src/i18n/locales/es.json` - Spanish translations

### Usage
```typescript
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();
return <span>{t('buttons.submit')}</span>;
```

### Adding New Languages
1. Create new JSON file in `src/i18n/locales/`
2. Add language to `src/i18n/i18n.ts` resources
3. Update `LanguageSelector.tsx` options

## 🛠 Technologies Used

- **React 19.1.0** - Frontend framework
- **TypeScript** - Type safety
- **Vite 7.0.3** - Build tool and dev server
- **react-aria-components 1.10.1** - Accessibility primitives
- **react-i18next** - Internationalization
- **CSS Modules** - Scoped styling

## 🎯 Key Features

### Component Features
- **Accessibility**: Built with react-aria-components
- **Type Safety**: Full TypeScript support
- **Responsive Design**: Mobile-friendly components
- **Theme Consistency**: Centralized color system
- **Reusability**: Atomic design structure

### Development Features
- **Hot Module Replacement**: Instant updates during development
- **ESLint**: Code quality enforcement
- **CSS Modules**: Scoped styling to prevent conflicts
- **Component Composition**: Flexible, reusable architecture

## 📋 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Building
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🔧 Development Guidelines

### Component Development
1. Follow Atomic Design principles
2. Use TypeScript for all components
3. Implement proper prop interfaces
4. Include CSS Modules for styling
5. Use centralized colors from `colors.css`

### File Naming Conventions
- Components: `PascalCase.tsx`
- Styles: `PascalCase.module.css`
- Types: `PascalCase.types.ts`

### Import Structure
```typescript
// External libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Internal components (atoms → molecules → organisms)
import { Button } from '../../atoms/Button/Button';
import { NumberInput } from '../../molecules/NumberInput/NumberInput';

// Styles
import styles from './Component.module.css';
```

## 🎪 Demo Application

The demo application showcases all components in two tabs:

1. **Components Tab**: Interactive showcase of all design system components
2. **Form Tab**: Functional form demonstrating component composition

### Form Features
- Real-time validation
- Synchronized NumberInput and Slider
- Internationalized labels and messages
- Clear/Submit functionality

## 🤝 Contributing

1. Follow the established component structure
2. Add translations for new text content
3. Use the centralized color system
4. Maintain TypeScript types
5. Test components in both English and Spanish

## 📝 Notes

- The project uses port 5173 by default, but will automatically find the next available port
- All components are designed to be reusable and composable
- The design system is fully internationalized and ready for additional languages
- Color system ensures consistent theming across all components
