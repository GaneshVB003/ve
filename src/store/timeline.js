import create from 'zustand';

/**
 * Zustand store for timeline state management.
 * Holds layers, selected layer, and actions for selection.
 */
export const useTimelineStore = create((set) => ({
  layers: [
    { id: '1', name: 'Video Layer' },
    { id: '2', name: 'Audio Layer' },
    { id: '3', name: 'Text Layer' },
  ],
  selectedLayerId: null,
  selectLayer: (id) => set({ selectedLayerId: id }),
}));