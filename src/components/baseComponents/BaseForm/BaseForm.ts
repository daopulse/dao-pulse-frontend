import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseForm',

  props: {
    handleSubmit: {
      type: Function,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },

  setup(props) {
    const submitForm = (): void => {
      props.handleSubmit();
    };

    return { submitForm };
  }
});
