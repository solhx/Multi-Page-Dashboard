# TODO: Sidebar Toggle Feature

## Task Requirements:
1. Add a toggle button in the header to open and close the sidebar
2. Sidebar should take full viewport height, align to left, collapse smoothly with animation
3. Shrink to icons-only mode when closed
4. Main content should automatically resize when sidebar collapses
5. Use Flexbox layout (no fixed positioning)
6. Add smooth CSS transition (width 0.3s ease)
7. Maintain responsive behavior
8. Clean and production-ready structure

## Implementation Steps:

### Step 1: Update Layout.tsx
- [ ] Change state from `sidebarOpen` to `isSidebarCollapsed`
- [ ] Add `onToggleSidebar` function
- [ ] Pass `isSidebarCollapsed` and `onToggleSidebar` to Sidebar component
- [ ] Pass `isSidebarCollapsed` and `onToggleSidebar` to Header component

### Step 2: Update Header.tsx
- [ ] Update props interface to include `isSidebarCollapsed` and `onToggleSidebar`
- [ ] Add toggle button with icon (visible on all screen sizes)
- [ ] Show collapse/expand icon based on sidebar state

### Step 3: Update Sidebar.tsx
- [ ] Update props interface to include `isCollapsed` and `onToggle`
- [ ] Remove fixed positioning, use Flexbox instead
- [ ] Add dynamic width with transition (w-20 collapsed, w-64 expanded)
- [ ] Show icons-only mode when collapsed
- [ ] Hide text content conditionally based on collapse state
- [ ] Ensure smooth animation

### Step 4: Test and Verify
- [ ] Verify sidebar toggle works from header
- [ ] Verify smooth animation (0.3s ease)
- [ ] Verify main content resizes automatically
- [ ] Verify responsive behavior works
- [ ] Verify icons-only mode works when collapsed

