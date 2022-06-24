import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SocialLink',

  props: {
    name: {
      type: String,
    },
    url: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const icons = {
      twitter: 'fab fa-twitter',
      telegram: 'fab fa-telegram',
      reddit: 'fab fa-reddit-alien',
      facebook: 'fab fa-facebook-square',
      medium: 'fab fa-medium',
      youtube: 'fab fa-youtube',
      discord: 'fab fa-discord',
    };

    return {
      icons,
    };
  },
});
