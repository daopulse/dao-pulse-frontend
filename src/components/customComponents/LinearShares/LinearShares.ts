import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LinearShares',

  props: {
    title: {
      type: String,
    },
    data: Object,
    color: {
      type: String,
      default: 'primary',
    },
  },
  setup(props) {
    const getGradient = (percent: string | number) => {
      const stopColors = {
        primary: '86, 101, 250',
        secondary: '98, 34, 234',
      };
      return `linear-gradient(90deg, rgba(${
        stopColors.secondary
      }, 0) 0%, rgba(${stopColors.secondary}, ${+percent / 100}) 100%)`;
    };
    const getPercent = (data: number | string) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return ((+data * 100) / +props.data.total).toFixed(1);
    };
    return {
      getGradient,
      getPercent,
    };
  },
});
