import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseBadge',

  props: {
    label: {
      type: String,
    },
    className: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    outlined: {
      type: Boolean,
      default: false
    },
    align: {
      type: String
    },
    floating: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const getClass = () => {
      let cls = props.className;
      cls += props.type ? ' badge-' + props.type : '';
      cls += props.outlined ? ' badge-outlined' : '';
      if (!props.type && !props.outlined && !props.floating) {
        cls += ' badge-base';
      }
      return cls;
    };
    return {
      getClass,
    };
  }
});
