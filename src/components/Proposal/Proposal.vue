<template>
  <div class="ui-card card-proposal q-pa-3 q-pa-sm-5">
    <div class="row items-center justify-between q-col-gutter-y-xl">
      <div class="col-6 col-sm-auto">
        <BaseBadge
          :type="(data.state !== ProposalState.CLOSED) ? 'positive' : 'negative'"
          :label="(data.state !== ProposalState.CLOSED) ? 'Active' : 'Closed'"
        />
      </div>
      <div class="col-6 col-sm-auto order-sm-last text-right q-ml-auto">
<!--        <BaseBadge outlined label="Funding proposal" />-->
      </div>
      <div class="col-7 col-sm-auto row-sm q-col-gutter-sm q-ml-sm-sm">
        <div class="text-muted">{{ getDate(data.submittedAt, 'DD MMM YYYY h:mm A') }}</div>
        <ExternalLink :url="data.url" :label="getLabelLink(data.url)" />
      </div>
      <div
        v-if="data.authorWallet?.cryptoAddress.address"
        class="col-5 col-sm-auto row-sm q-col-gutter-sm q-ml-sm-sm"
      >
        <div class="text-light">Proposed by</div>
        <ClipboardCopy :data="data.authorWallet?.cryptoAddress.address" text-ellipsis />
      </div>
    </div>
    <div class="h2 q-mt-5 q-mb-4">{{ data.title }}</div>
    <div class="row-sm items-center q-gutter-sm">
      <div class="text-light">Voting dates:</div>
      <div>{{ getDate(data.startVotingAt, 'DD MMM YYYY h:mm A') }} - {{ getDate(data.endVotingAt, 'DD MMM YYYY h:mm A') }}</div>
    </div>
    <div class="text-light text-lg q-mb-5 q-mt-4 text-markdown">
      <TextClamp :line="5" :text="toHTML" text-format="html" />
    </div>
    <div class="q-gutter-md">
      <LinearShares color="primary" :data="votes" title="Votes result" />
<!--      <LinearShares color="secondary" :data="shares" title="Shares" />-->
    </div>
  </div>
</template>

<script src="./Proposal.ts" lang="ts" />
<style src="./Proposal.scss" lang="scss" />
