# accessibility-responsive Skill

## When it applies
This skill applies to all frontend implementation tasks where accessibility and responsive behavior are concerns including:
- Creating or modifying any user interface components
- Implementing layouts that must work on different screen sizes
- Adding interactive elements (buttons, forms, menus, etc.)
- Ensuring keyboard navigation and focus management
- Implementing color contrast and text readability
- Adding ARIA labels, roles, and properties
- Creating accessible forms with proper labels and validation
- Implementing responsive images, videos, and media
- Ensuring touch targets are appropriately sized for mobile
- Testing and fixing accessibility issues
- Implementing prefers-reduced-motion and other media queries

## Mandatory rules
1. Always ensure WCAG 2.1 AA compliance for all implemented components
2. Maintain minimum 4.5:1 contrast ratio for normal text, 3:1 for large text
3. Ensure all interactive elements are keyboard accessible and navigable
4. Implement proper focus management and visible focus indicators
5. Use semantic HTML elements appropriately (button, nav, form, label, etc.)
6. Provide meaningful alt text for all informative images
7. Ensure forms have properly associated labels using <label> elements
8. Implement responsive design that works on mobile, tablet, and desktop
9. Make touch targets at least 44x44px for mobile accessibility
10. Respect prefers-reduced-motion media query and provide reduced motion alternatives
11. Ensure dynamic content changes are announced to screen readers when appropriate
12. Implement skip navigation links or equivalent mechanisms for keyboard users
13. Ensure all color-dependent information has alternative indicators (text, icons)
14. Test with screen readers and keyboard-only navigation regularly
15. Use relative units (rem, em, %) for scalability rather than fixed pixels where appropriate

## Prohibited actions
1. Do NOT rely on color alone to convey information or indicate state
2. Do NOT create keyboard traps or make elements inaccessible via keyboard
3. Do NOT use insufficient color contrast that fails WCAG 2.1 AA standards
4. Do NOT omit alt text for informative images (decorative images can use empty alt)
5. Do NOT create forms without properly associated labels
6. Do NOT implement interactions that require precise mouse control without alternatives
7. Do NOT ignore viewport meta tag or break responsive layouts at common breakpoints
8. Do NOT create touch targets smaller than 44x44px without justification
9. Do NOT disable or override prefers-reduced-motion without user consent
10. Do NOT use tabindex values greater than 0 to manipulate tab order unnaturally
11. Do NOT rely solely on placeholder text as a replacement for proper labels
12. Do NOT create complex custom widgets without ensuring they're accessible
13. Do NOT forget to test accessibility after every UI change
14. Do NOT use inaccessible JavaScript frameworks or libraries without verification
15. Do NOT assume that visual correctness implies accessibility correctness

## Completion checks
- [ ] All text meets minimum WCAG 2.1 AA contrast ratios (4.5:1 normal, 3:1 large)
- [ ] All interactive elements are accessible via keyboard alone
- [ ] Visible focus indicators are present and obvious for keyboard users
- [ ] Semantic HTML elements are used appropriately throughout
- [ ] All informative images have meaningful alt text
- [ ] All form fields have properly associated <label> elements
- [ ] Layout works correctly on mobile, tablet, and desktop screen sizes
- [ ] Touch targets are at least 44x44px for mobile accessibility
- [ ] Prefers-reduced-motion media query is respected and implemented
- [ ] Dynamic content changes are appropriately announced to screen readers
- [ ] Skip navigation or equivalent mechanism is implemented for keyboard users
- [ ] Color-dependent information has alternative indicators (text, patterns, icons)
- [ ] Regularly tested with screen readers and keyboard-only navigation
- [ ] No inaccessible JavaScript frameworks or libraries are used without verification
- [ ] Visual correctness is never assumed to imply accessibility correctness
- [ ] Relative units (rem, em, %) are used appropriately for scalability
- [ ] Accessibility testing is performed after every significant UI change