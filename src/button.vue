<template>
  <button class="g-button">
    <svg class="icon">
      <use xlink:href="#i-setting"></use>
    </svg>
    <slot></slot>
  </button>
</template>

<script>
export default {
}
</script>

<style lang="scss">
 .g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover)
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  .icon {
    width: 1em;
    height: 1em;
  }
}
</style>