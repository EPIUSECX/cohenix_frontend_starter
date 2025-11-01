# Changelog

All notable changes to the Doppio project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - 2025-11-01

### Added
- **Pinia State Management Support**: Optional `--pinia` flag for Vue SPAs to add official Vue store
- **Modern Python Packaging**: Added `pyproject.toml` following PEP 621 standards
- **Pinia Store Boilerplate**: Example store using Composition API style
- **JSDoc Documentation**: Added documentation to auth controller
- **Modern Features Section**: Comprehensive documentation of 2025 standards in README
- **Pinia Usage Example**: Added code example in README for using Pinia stores
- **MODERNIZATION_SUMMARY.md**: Detailed document explaining all changes

### Changed
- **Vue Boilerplates**: Migrated from Options API to Composition API with `<script setup>` syntax
  - Updated `APP_VUE_BOILERPLATE` to use Composition API
  - Updated `HOME_VUE_BOILERPLATE` to use inject and Composition API
  - Updated `LOGIN_VUE_BOILERPLATE` to use ref, inject, useRouter, useRoute, and onMounted
- **Build Target**: Updated from ES2015 to ES2020 for both Vue and React Vite configs
  - Smaller bundles
  - Modern JavaScript features
  - Better performance
- **Socket.io-client**: Updated installation version from 4.5.1 to 4.8.1 for consistency
- **Package Manager**: Standardized all commands to use Yarn instead of npm
  - Changed `npm install` to `yarn add`
  - Changed `npm init` to `yarn init`
  - Changed `npx` to `yarn dlx`
- **Auth Controller**: Refactored cookie parsing into separate function with better error handling
- **Resource Manager Configuration**: Added proper resourcesConfig in MAIN_JS_BOILERPLATE
- **README.md**: Comprehensive update with modern features, options documentation, and examples
- **Route Guards**: Fixed typo in comment ("gaurds" → "guards")

### Improved
- **Code Quality**: All generated code now follows 2025 best practices
- **Documentation**: Clear explanation of all options and modern features
- **TypeScript Support**: Better integration with modern patterns
- **Developer Experience**: More intuitive, cleaner code patterns
- **Bundle Sizes**: Smaller production builds with ES2020 target
- **Maintainability**: Cleaner, more modular code structure

### Technical Details
- Vue 3.5.12 (latest stable)
- Vite 5.4.10 (latest)
- Socket.io-client 4.8.1 (latest)
- Vue Router 4.x
- Pinia (latest, optional)
- ES2020 JavaScript target
- Python 3.10+ requirement
- PEP 621 compliant packaging

### Compatibility
- ✅ Fully backward compatible
- ✅ Existing SPAs continue to work
- ✅ New projects get modern patterns automatically
- ✅ Frappe v15 compatible
- ✅ React 18+ compatible

---

## [0.0.1] - Previous

Initial release with Vue 3 and React support.

### Features
- Vue 3 SPA generation with Vite
- React SPA generation with Vite
- Custom desk pages with Vue/React
- TailwindCSS support
- TypeScript support
- Socket.io integration
- Resource manager for Vue
- frappe-react-sdk for React
- Authentication system
- Router setup

---

[Unreleased]: https://github.com/NagariaHussain/doppio/compare/v0.0.1...HEAD
[0.0.1]: https://github.com/NagariaHussain/doppio/releases/tag/v0.0.1

