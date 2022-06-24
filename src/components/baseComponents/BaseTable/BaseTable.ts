import { defineComponent, PropType, ref, watch } from 'vue';
import { Paginator, TableColumn } from '@/components/baseComponents/BaseTable/types';
import BaseCheckbox from '@/components/baseComponents/BaseCheckbox/BaseCheckbox.vue';
import TableSkeleton from '@/components/skeletons/TableSkeleton/TableSkeleton.vue';
import { defaultRowPerPagesOptions } from '@/app.options/defaultPaginatorSettings';
import { cloneDeep } from 'lodash';

export default defineComponent({
  name: 'BaseTable',

  components: {
    BaseCheckbox,
    TableSkeleton
  },

  props: {
    rows: {
      type: Array as PropType<unknown[]>,
      required: true
    },
    columns: {
      type: Array as PropType<TableColumn[]>,
      required: true
    },
    rowKeyName: {
      type: String,
      default: 'name'
    },
    visibleColumns: {
      type: Array as PropType<string[]>
    },
    className: {
      type: String,
      default: ''
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    selection: {
      type: String
    },
    skeletonRows: {
      type: [Number, String]
    },
    skeletonCols: {
      type: [Number, String]
    },
    wrapCells: {
      type: Boolean,
      default: false
    },
    skeletonVisibleColumn: {
      type: Array as PropType<string[]>
    },
    pagination: {
      type: Object as PropType<Paginator>,
      required: true
    },
    selectedRowsLabel: {
      type: Function
    },
    paginationLabel: {
      type: Function
    }
  },

  emits: ['changePaginator'],

  setup(props, { slots, emit }) {
    const paginator = ref(props.pagination);

    watch(() => props.pagination, () => {
      paginator.value.rowsNumber = props.pagination.rowsNumber;
    }, { deep: true });

    const onRequest = (pag: { pagination: Paginator }) => {
      const { page, rowsPerPage, sortBy, descending } = pag.pagination;

      paginator.value.page = page;
      paginator.value.rowsPerPage = rowsPerPage;
      paginator.value.sortBy = sortBy;
      paginator.value.descending = descending;
      emit('changePaginator', cloneDeep(paginator.value));
    };

    return {
      onRequest,
      defaultRowPerPagesOptions,
      slots,
      paginator
    };
  }
});
