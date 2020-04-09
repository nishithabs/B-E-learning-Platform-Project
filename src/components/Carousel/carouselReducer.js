import { carouselConstants } from './carouselConstants';

const { NEXT, PREV } = carouselConstants;

const getWidth = () => window.innerWidth;

function carouselReducer(state, action) {
  switch (action.type) {
    case NEXT:
      if (state.activeSlide === state.length - 1) {
        return {
          ...state,
          translate: 0,
          activeSlide: 0
        }
      }
      return {
        ...state,
        activeSlide: state.activeSlide + 1,
        translate: (state.activeSlide + 1) * getWidth()
      };
    case PREV:
      if (state.activeSlide === 0) {
        return {
          ...state,
          translate: (state.length - 1) * getWidth(),
          activeSlide: state.length - 1
        }
      }

      return {
        ...state,
        activeSlide: state.activeSlide - 1,
        translate: (state.activeSlide - 1) * getWidth()
      };
    default:
      return state;
  }
}

export default carouselReducer;
