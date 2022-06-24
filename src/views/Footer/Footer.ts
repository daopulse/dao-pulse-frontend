import { defineComponent } from 'vue';
import Copyright from '@/components/Copyright/Copyright.vue';
import SocialNetworks from '@/components/SocialNetworks/SocialNetworks.vue';

export default defineComponent({
  name: 'Footer',

  components: {
    Copyright,
    SocialNetworks
  }
});
