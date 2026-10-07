# Agentic Workspace Frontend Implementation Plan

## 1. Folder Structure (Monorepo)

```
agentic-workspace/
├── apps/
│   ├── web/                  # Frontend React application
│   │   ├── src/
│   │   │   ├── assets/       # Static assets (images, icons, etc.)
│   │   │   ├── components/   # Reusable UI components
│   │   │   │   ├── layout/   # Layout components (Header, Sidebar, etc.)
│   │   │   │   ├── ui/       # Primitive UI components (Button, Input, etc.)
│   │   │   │   ├── agents/   # Agent-specific components
│   │   │   │   ├── chat/     # Chat/message components
│   │   │   │   └── panels/   # Panel components (sidebar, right panel)
│   │   │   ├── hooks/        # Custom React hooks
│   │   │   ├── lib/          # Utility functions and constants
│   │   │   ├── pages/        # Page components (routes)
│   │   │   ├── services/     # API service layer (mock for now)
│   │   │   ├── store/        # State management (Zustand or similar)
│   │   │   ├── styles/       # Global styles and Tailwind configuration
│   │   │   ├── types/        # TypeScript types and interfaces
│   │   │   ├── utils/        # Utility functions
│   │   │   └── App.tsx       # Main app component
│   │   ├── index.html        # HTML template
│   │   ├── package.json      # Web app dependencies
│   │   ├── tsconfig.json     # TypeScript config
│   │   ├── vite.config.ts    # Vite configuration
│   │   └── tailwind.config.js # Tailwind CSS configuration
│   └── api/                  # Placeholder for Go backend (to be implemented later)
│       └── go.mod            # Go module file (placeholder)
├── .github/                  # GitHub workflows and configs
├── .gitignore                # Git ignore file
├── README.md                 # Project documentation
├── package.json              # Root package.json (workspace config)
├── turbo.json                # Turbopack configuration (optional)
└── pnpm-workspace.yaml       # PNMP workspace configuration (optional)
```

## 2. Component Hierarchy

```
App
├── WorkspaceShell
│   ├── Header
│   │   ├── Logo/Brand
│   │   ├── Search/Filter
│   │   ├── Theme Toggle (Light/Dark)
│   │   └── User Profile/Avatar
│   ├── Sidebar (responsive)
│   │   ├── New Conversation Button
│   │   ├── Agent List
│   │   │   └── AgentItem (with status, specialty, model, instruction summary)
│   │   └── Conversation History (collapsible)
│   ├── MainContent
│   │   ├── ChatArea
│   │   │   ├── MessageList
│   │   │   │   ├── Message (various types: user, agent, tool, system)
│   │   │   │   └── Loading/Skeleton states
│   │   │   ├── InputArea
│   │   │   │   ├── TextInput
│   │   │   │   ├── Attachment/Button
│   │   │   │   └── SendButton
│   │   │   └── StreamingIndicator (for agent responses)
│   │   └── AgentControls
│   │       ├── Agent Switcher
│   │       ├── Model Selector
│   │       └── Settings/Configure
│   └── RightPanel
│       ├── AgentInfo
│       │   ├── Active Agent Display
│       │   ├── Specialty & Model
│       │   └── Instruction Summary
│       ├── ToolsPanel
│       │   ├── Active Tools List
│       │   ├── Tool Status (idle/running/completed)
│       │   └── Tool Results/Output
│       ├── ContextPanel
│       │   ├── Current Context/Variables
│       │   ├── File Attachments
│       │   └── Memory/Knowledge Base
│       └── ActivityLog
│           ├── Run Activity Timeline
│           ├── Token Usage/Cost
│           └── Performance Metrics
├── LoadingScreen
├── ErrorBoundary
└── EmptyStates
    ├── EmptyWorkspace
    ├── EmptyConversation
    └── ErrorState
```

## 3. Mock Data & Types

### Types (`src/types/`)
```typescript
// agent.ts
export interface Agent {
  id: string;
  name: string;
  specialty: string;
  preferredModel: string;
  instructionSummary: string;
  status: 'idle' | 'running' | 'completed' | 'error';
  avatar?: string;
  tools: Tool[];
}

// tool.ts
export interface Tool {
  id: string;
  name: string;
  description: string;
  status: 'idle' | 'running' | 'completed' | 'error';
  lastUsed?: string;
}

// message.ts
export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system' | 'tool';
  content: string;
  timestamp: string;
  metadata?: {
    agentId?: string;
    toolId?: string;
    modelUsed?: string;
    tokensUsed?: number;
  };
  attachments?: Attachment[];
}

// conversation.ts
export interface Conversation {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  agentId: string;
  messages: Message[];
}

// attachment.ts
export interface Attachment {
  id: string;
  name: string;
  type: string; // mime type
  url: string;
  size: number;
}

// context.ts
export interface ContextItem {
  id: string;
  key: string;
  value: any;
  type: 'string' | 'number' | 'boolean' | 'object' | 'array';
  updatedAt: string;
}

// activity.ts
export interface ActivityLogEntry {
  id: string;
  type: 'agent_start' | 'agent_end' | 'tool_execution' | 'message_sent' | 'context_update';
  timestamp: string;
  description: string;
  metadata?: Record<string, any>;
}
```

### Mock Data (`src/lib/mockData.ts`)
```typescript
// Mock agents
export const mockAgents: Agent[] = [
  {
    id: 'agent-1',
    name: 'Code Specialist',
    specialty: 'Software Development & Debugging',
    preferredModel: 'claude-3-5-sonnet-20241022',
    instructionSummary: 'Expert in writing, reviewing, and debugging code across multiple languages. Focuses on best practices, performance optimization, and maintainable solutions.',
    status: 'idle',
    avatar: '/avatars/code-specialist.png',
    tools: [
      { id: 'tool-1', name: 'Code Runner', description: 'Execute and test code snippets', status: 'idle' },
      { id: 'tool-2', name: 'Debugger', description: 'Step-through debugging with breakpoints', status: 'idle' },
      { id: 'tool-3', name: 'Linter', description: 'Code quality and style checking', status: 'idle' }
    ]
  },
  {
    id: 'agent-2',
    name: 'Architecture Advisor',
    specialty: 'System Design & Technical Planning',
    preferredModel: 'claude-3-opus-20240229',
    instructionSummary: 'Specializes in designing scalable system architectures, choosing appropriate technologies, and creating technical roadmaps for complex projects.',
    status: 'idle',
    avatar: '/avatars/architecture-advisor.png',
    tools: [
      { id: 'tool-4', name: 'Diagram Creator', description: 'Generate architecture diagrams', status: 'idle' },
      { id: 'tool-5', name: 'Tech Stack Advisor', description: 'Recommend appropriate technologies', status: 'idle' },
      { id: 'tool-6', name: 'Scalability Analyzer', description: 'Analyze system scalability bottlenecks', status: 'idle' }
    ]
  },
  {
    id: 'agent-3',
    name: 'DevOps Engineer',
    specialty: 'CI/CD, Deployment & Infrastructure',
    preferredModel: 'claude-3-5-sonnet-20241022',
    instructionSummary: 'Expert in setting up deployment pipelines, managing infrastructure as code, and ensuring reliable system operations in production environments.',
    status: 'idle',
    avatar: '/avatars/devops-engineer.png',
    tools: [
      { id: 'tool-7', name: 'Pipeline Builder', description: 'Create CI/CD workflows', status: 'idle' },
      { id: 'tool-8', name: 'Infrastructure Validator', description: 'Validate IaC configurations', status: 'idle' },
      { id: 'tool-9', name: 'Deployment Monitor', description: 'Track deployment status and health', status: 'idle' }
    ]
  }
];

// Mock conversations
export const mockConversations: Conversation[] = [
  {
    id: 'conv-1',
    title: 'React Performance Optimization',
    createdAt: '2024-10-05T10:30:00Z',
    updatedAt: '2024-10-05T14:22:00Z',
    agentId: 'agent-1',
    messages: [
      {
        id: 'msg-1',
        role: 'user',
        content: 'How can I optimize the performance of my React application with heavy computational workloads?',
        timestamp: '2024-10-05T10:30:00Z'
      },
      {
        id: 'msg-2',
        role: 'assistant',
        content: 'For React performance optimization with heavy computations, consider these approaches: 1) Use useMemo and useCallback for expensive calculations, 2) Implement virtual scrolling for large lists, 3) Offload heavy computations to Web Workers, 4) Use React.memo for component optimization, 5) Consider server-side rendering or static generation for initial load...',
        timestamp: '2024-10-05T10:31:00Z',
        metadata: { agentId: 'agent-1', modelUsed: 'claude-3-5-sonnet-20241022', tokensUsed: 145 }
      }
    ]
  }
];

// Mock context items
export const mockContextItems: ContextItem[] = [
  { id: 'ctx-1', key: 'projectName', value: 'Agentic Workspace', type: 'string', updatedAt: '2024-10-05T14:00:00Z' },
  { id: 'ctx-2', key: 'techStack', value: { frontend: 'React/TS/Vite/Tailwind', backend: 'Go', database: 'PostgreSQL' }, type: 'object', updatedAt: '2024-10-05T13:30:00Z' },
  { id: 'ctx-3', key: 'deploymentTarget', value: 'AWS ECS', type: 'string', updatedAt: '2024-10-05T12:15:00Z' }
];

// Mock activity log
export const mockActivityLog: ActivityLogEntry[] = [
  {
    id: 'act-1',
    type: 'agent_start',
    timestamp: '2024-10-05T14:20:00Z',
    description: 'Code Specialist agent started processing request',
    metadata: { agentId: 'agent-1', modelUsed: 'claude-3-5-sonnet-20241022' }
  },
  {
    id: 'act-2',
    type: 'tool_execution',
    timestamp: '2024-10-05T14:20:15Z',
    description: 'Code Runner tool executed test suite',
    metadata: { toolId: 'tool-1', status: 'completed', duration: '2.3s' }
  }
];
```

## 4. Routes

Using React Router v6:
```
/ (Home) - Workspace shell with recent conversations
/conversations/:id - Specific conversation view
/conversations/new - New conversation flow
/settings - User and workspace settings
/help - Documentation and help
/* - Not found page
```

## 5. Dependencies

### Core Dependencies
- react@^18.2.0
- react-dom@^18.2.0
- react-router-dom@^6.20.0
- typescript@^5.3.0
- vite@^5.0.0
- tailwindcss@^3.3.0
- postcss@^8.4.0
- autoprefixer@^10.4.0

### UI/UX
- @headlessui/react@^1.7.0 (for accessible UI components)
- heroicons@^2.0.0 (for icons)
- clsx@^2.0.0 (for conditional class names)
- tailwind-merge@^2.0.0 (for merging Tailwind classes)

### State Management
- zustand@^4.4.0 (lightweight state management)
- immer@^10.0.0 (for immutable state updates)

### Forms & Validation
- react-hook-form@^7.45.0
- @hookform/resolvers@^3.3.0
- zod@^3.20.0 (for schema validation)

### Utilities
- date-fns@^2.30.0 (for date formatting)
- lodash@^4.17.21 (for utility functions)
- nanoid@^4.0.0 (for ID generation)

### Dev Dependencies
- @types/react@^18.2.0
- @types/react-dom@^18.2.0
- @types/node@^20.0.0
- @types/lodash@^4.14.0
- typescript-eslint@^6.0.0
- eslint@^8.0.0
- eslint-plugin-react@^7.0.0
- eslint-plugin-react-hooks@^4.0.0
- prettier@^3.0.0
- eslint-config-prettier@^8.0.0
- eslint-plugin-prettier@^5.0.0
- vitest@^1.0.0 (for testing)
- @testing-library/react@^6.0.0
- @testing-library/jest-dom@^6.0.0

## 6. Implementation Phases

### Phase 1: Project Setup & Foundation (Day 1-2)
- [ ] Initialize monorepo structure with apps/web and apps/api
- [ ] Set up Vite + React + TypeScript + Tailwind CSS
- [ ] Configure ESLint, Prettier, and TypeScript strict mode
- [ ] Set up Zustand for state management
- [ ] Create basic layout components (Header, Sidebar, MainContent, RightPanel)
- [ ] Implement responsive design with mobile-first approach
- [ ] Create ThemeContext for light/dark mode switching
- [ ] Implement basic routing with React Router

### Phase 2: Core UI Components (Day 3-4)
- [ ] Build primitive UI components (Button, Input, TextArea, Checkbox, Switch, etc.)
- [ ] Create agent list and agent item components with status indicators
- [ ] Build message components (user, agent, tool, system messages)
- [ ] Implement chat input area with attachment support
- [ ] Create loading skeletons and empty states
- [ ] Implement right panel components (agent info, tools, context, activity)
- [ ] Add accessible keyboard navigation throughout

### Phase 3: State Management & Data Flow (Day 5-6)
- [ ] Set up Zustand stores for agents, conversations, messages, context, activity
- [ ] Implement mock data services simulating API calls
- [ ] Create hooks for fetching and manipulating data
- [ ] Implement agent switching functionality
- [ ] Add conversation creation and navigation
- [ ] Implement context variable management
- [ ] Add tool execution simulation with status updates

### Phase 4: Chat & Interaction Features (Day 7-8)
- [ ] Implement streaming message simulation (typewriter effect)
- [ ] Add message timestamps and metadata display
- [ ] Create attachment preview and handling
- [ ] Implement search/filter functionality in sidebar
- [ ] Add conversation renaming, deletion, and archiving
- [ ] Implement undo/redo for context changes
- [ ] Add keyboard shortcuts (Cmd/K for search, Cmd+N for new conversation, etc.)

### Phase 5: Polish & Accessibility (Day 9-10)
- [ ] Ensure WCAG 2.1 AA compliance (color contrast, focus management, ARIA labels)
- [ ] Test responsive design across mobile, tablet, desktop
- [ ] Optimize performance with React.memo, useMemo, useCallback where appropriate
- [ ] Add proper error boundaries and error states
- [ ] Implement skeleton loading for better perceived performance
- [ ] Add animation and motion using Framer Motion or CSS transitions
- [ ] Test with screen readers and keyboard-only navigation
- [ ] Finalize visual design per specifications (dark graphite, electric accent, typography)

### Phase 6: Final Review & Preparation for Backend (Day 11)
- [ ] Review all components against mock data and types
- [ ] Ensure clean separation of concerns and reusable components
- [ ] Document component APIs and props interfaces
- [ ] Create API contract documentation for future Go backend
- [ ] Run accessibility audit with Axe
- [ ] Performance audit with Lighthouse
- [ ] Prepare code for backend integration (service layer abstraction)

## 7. Visual Design Specifications

### Color Palette
- Background: #0A0A0A (dark graphite)
- Surface: #111111 (slightly lighter graphite)
- Accent: #00D4FF (restrained electric cyan - to be adjusted for accessibility)
- Text Primary: #FFFFFF
- Text Secondary: #8E8E8E
- Border: #2A2A2A
- Success: #00F5A4
- Warning: #FFB800
- Error: #FF4D4D

### Typography
- Font Family: System UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- Heading: Font weight 600, letter-spacing -0.5px
- Body: Font weight 400, line-height 1.6
- Monospace: For code snippets and technical content

### Spacing & Layout
- Base spacing unit: 4px
- Max content width: 1200px
- Sidebar width: 280px (collapsible to 80px for icons-only)
- Right panel width: 350px
- Border radius: 4px (crisp, not overly rounded)
- Shadow: Subtle 0 1px 3px rgba(0,0,0,0.3)

### Interactive States
- Hover: Increase brightness by 5%
- Focus: 2px outline with accent color
- Pressed: Decrease brightness by 10%
- Disabled: Opacity 50%, cursor not-allowed