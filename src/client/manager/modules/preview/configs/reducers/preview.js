import { types } from '../../actions';

export function ensureKind(storyKinds, selectedKind) {
  const found = storyKinds.find(item => item.kind === selectedKind);
  if (found) return found.kind;
  // if the selected kind is non-existant, select the first kind
  const kinds = storyKinds.map(item => item.kind);
  return kinds[0];
}

export function ensureStory(storyKinds, selectedKind, selectedStory) {
  const kindInfo = storyKinds.find(item => item.kind === selectedKind);
  if (!kindInfo) return null;

  const found = kindInfo.stories.find(item => item === selectedStory);
  if (found) return found;

  return kindInfo.stories[0];
}

export default function (state = {}, action) {
  switch (action.type) {
    case types.SELECT_STORY: {
      // TODO: if action.story is null, we need to select the first story of the
      // given kind.
      const selectedKind = ensureKind(state.stories, action.kind);
      const selectedStory = ensureStory(state.stories, selectedKind, action.story);
      return {
        ...state,
        selectedKind,
        selectedStory,
      };
    }

    case types.CLEAR_ACTIONS: {
      return {
        ...state,
        actions: [],
      };
    }

    case types.SET_STORIES: {
      const newState = {
        ...state,
        stories: action.stories,
      };

      newState.selectedKind = ensureKind(newState.stories, state.kind);
      newState.selectedStory = ensureStory(
        newState.stories, newState.selectedKind, state.story
      );

      return newState;
    }

    case types.ADD_ACTION: {
      const actions = [
        action.action,
        ...state.actions || [],
      ];

      return {
        ...state,
        actions,
      };
    }

    default:
      return state;
  }
}