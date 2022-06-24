<template>
  <BaseForm
    :handleSubmit="submitForm"
    class-name="dao-table-filter-form q-col-gutter-sm wrap flex-sm-nowrap row"
    id="filter-form"
  >
    <div class="col-6 col-sm-auto">
      <BaseDropDownMenu
        :disabled="isLoadingDaoList || isLoadingDic"
        label="filter"
        icon="eva-funnel-outline"
        header="Filter"
        class="w-full"
      >
        <div
          class="q-px-3 q-pb-2 caption text-gradient self-end q-pt-none cursor-pointer  "
          @click="resetFilters()"
        >
          Reset all
        </div>
        <div class="form-area">
          <div
            class="dd-menu-list-item"
            :class="{ active: values[FilterFormFields.IS_VISIBLE_STATUS] }"
          >
            <BaseCheckbox
              :name="FilterFormFields.IS_VISIBLE_STATUS"
              :label="getFilterFieldOptions(FilterFormFields.IS_VISIBLE_STATUS).label"
              :value="true"
            />
          </div>
          <div
            class="dd-menu-list-item-collapse"
            v-if="values[FilterFormFields.IS_VISIBLE_STATUS]"
          >
            <BaseSelect
              :name="FilterFormFields.STATUS"
              :label="getFilterFieldOptions(FilterFormFields.STATUS).placeholder"
              :options="[
              { label: 'active', value: true },
              { label: 'inactive', value: false },
            ]"
              emit-value
            />
          </div>
          <div
            class="dd-menu-list-item"
            :class="{ active: values[FilterFormFields.IS_VISIBLE_BLOCKCHAIN] }"
          >
            <BaseCheckbox
              :name="FilterFormFields.IS_VISIBLE_BLOCKCHAIN"
              :label="getFilterFieldOptions(FilterFormFields.IS_VISIBLE_BLOCKCHAIN).label"
              :value="true"
            />
          </div>
          <div
            class="dd-menu-list-item-collapse"
            v-if="values[FilterFormFields.IS_VISIBLE_BLOCKCHAIN]"
          >
            <BaseSelect
              :name="FilterFormFields.BLOCKCHAIN"
              :label="getFilterFieldOptions(FilterFormFields.IS_VISIBLE_BLOCKCHAIN).label"
              :options="blockchainOptions.cryptoPlatformTypeList?.map(item => item.typeName)"
              multiple
              use-chips
            />
            <!--    TODO пока нет данных не работает -->
            <!--    <BaseSelect-->
            <!--      :name="FilterFormFields.TECHNOLOGY"-->
            <!--      label="tech"-->
            <!--      :app.options="['tech1', 'tech2', 'tech3', 'tech4']"-->
            <!--    />-->
          </div>
          <!--        <div-->
          <!--          class="dd-menu-list-item"-->
          <!--          :class="{ active: values[FilterFormFields.IS_VISIBLE_PLATFORM] }"-->
          <!--        >-->
          <!--          <BaseCheckbox-->
          <!--            :name="FilterFormFields.IS_VISIBLE_PLATFORM"-->
          <!--            :label="getFilterFieldOptions(FilterFormFields.IS_VISIBLE_PLATFORM).label"-->
          <!--            :value="true"-->
          <!--          />-->
          <!--        </div>-->
          <!--        <div-->
          <!--          class="dd-menu-list-item-collapse"-->
          <!--          v-if="values[FilterFormFields.IS_VISIBLE_PLATFORM]"-->
          <!--        >-->
          <!--          <BaseSelect-->
          <!--            :name="FilterFormFields.PLATFORM"-->
          <!--            :label="getFilterFieldOptions(FilterFormFields.PLATFORM).placeholder"-->
          <!--            :app.options="['pl1', 'pl2', 'pl3', 'pl4']"-->
          <!--          />-->
          <!--        </div>-->
          <div
            class="dd-menu-list-item"
            :class="{ active: values[FilterFormFields.IS_VISIBLE_TOKEN_HOLDERS] }"
          >
            <BaseCheckbox
              :name="FilterFormFields.IS_VISIBLE_TOKEN_HOLDERS"
              :label="getFilterFieldOptions(FilterFormFields.IS_VISIBLE_TOKEN_HOLDERS).label"
              :value="true"
            />
          </div>
          <div
            class="dd-menu-list-item-collapse"
            v-if="values[FilterFormFields.IS_VISIBLE_TOKEN_HOLDERS]"
          >
            <BaseInputText
              :name="FilterFormFields.TOKEN_HOLDERS_COUNT_MIN"
              :type="InputTypes.NUMBER"
              :placeholder="getFilterFieldOptions(FilterFormFields.TOKEN_HOLDERS_COUNT_MIN).placeholder"
              class="no-error"
            />
            <BaseInputText
              :name="FilterFormFields.TOKEN_HOLDERS_COUNT_MAX"
              :type="InputTypes.NUMBER"
              :placeholder="getFilterFieldOptions(FilterFormFields.TOKEN_HOLDERS_COUNT_MAX).placeholder"
              class="no-error q-mt-2"
            />
          </div>
          <div
            class="dd-menu-list-item"
            :class="{ active: values[FilterFormFields.IS_VISIBLE_MARKET_CAP] }"
          >
            <BaseCheckbox
              :name="FilterFormFields.IS_VISIBLE_MARKET_CAP"
              :label="getFilterFieldOptions(FilterFormFields.IS_VISIBLE_MARKET_CAP).label"
              :value="true"
            />
          </div>
          <div
            class="dd-menu-list-item-collapse"
            v-if="values[FilterFormFields.IS_VISIBLE_MARKET_CAP]"
          >
            <BaseInputText
              :name="FilterFormFields.TOTAL_MARKET_CAP_MIN"
              :type="InputTypes.NUMBER"
              :placeholder="getFilterFieldOptions(FilterFormFields.TOTAL_MARKET_CAP_MIN).placeholder"
              class="no-error"
            />
            <BaseInputText
              :name="FilterFormFields.TOTAL_MARKET_CAP_MAX"
              :type="InputTypes.NUMBER"
              :placeholder="getFilterFieldOptions(FilterFormFields.TOTAL_MARKET_CAP_MAX).placeholder"
              class="no-error q-mt-2"
            />
          </div>
          <!--        <div-->
          <!--          class="dd-menu-list-item"-->
          <!--          :class="{ active: values[FilterFormFields.IS_VISIBLE_DAO_TYPE] }"-->
          <!--        >-->
          <!--          <BaseCheckbox-->
          <!--            :name="FilterFormFields.IS_VISIBLE_DAO_TYPE"-->
          <!--            :label="getFilterFieldOptions(FilterFormFields.IS_VISIBLE_DAO_TYPE).label"-->
          <!--            :value="true"-->
          <!--          />-->
          <!--        </div>-->
          <!--        <div-->
          <!--          class="dd-menu-list-item-collapse"-->
          <!--          v-if="values[FilterFormFields.IS_VISIBLE_DAO_TYPE]"-->
          <!--        >-->
          <!--          <BaseSelect-->
          <!--            :name="FilterFormFields.DAO_TYPE"-->
          <!--            :label="getFilterFieldOptions(FilterFormFields.DAO_TYPE).placeholder"-->
          <!--            :app.options="['type1', 'type2', 'type3']"-->
          <!--            multiple-->
          <!--            use-chips-->
          <!--          />-->
          <!--        </div>-->
        </div>
      </BaseDropDownMenu>
    </div>
    <div class="col-6 col-sm-auto q-ml-sm-auto">
    <ActiveColumnsFilter class="w-full" />
    </div>
    <div class="col-12 col-sm-auto order-sm-first">
    <BaseInputText
      debounce="300"
      :name="FilterFormFields.DAO_NAME"
      :placeholder="getFilterFieldOptions(FilterFormFields.DAO_NAME).placeholder"
      searchInput
    />
    </div>
  </BaseForm>
</template>

<script src="./DaoTableFiltersForm.ts" lang="ts" />
<style src="./DaoTableFiltersForm.scss" lang="scss" />
