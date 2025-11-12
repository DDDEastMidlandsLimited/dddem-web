import '@testing-library/jest-dom/extend-expect';

// Mock dynamic imports to prevent act() warnings in tests
jest.mock('next/dynamic', () => ({
  __esModule: true,
  default: (...args) => {
    const dynamicModule = jest.requireActual('next/dynamic');
    const dynamicActualComp = dynamicModule.default;
    const RequiredComponent = dynamicActualComp(args[0]);
    if (RequiredComponent.preload) {
      RequiredComponent.preload();
    } else if (RequiredComponent.render?.preload) {
      RequiredComponent.render.preload();
    }
    return RequiredComponent;
  },
}));
