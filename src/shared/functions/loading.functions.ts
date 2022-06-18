import { ref } from 'vue';

const loading = ref(false);
const alternarLoading = () => (loading.value = !loading.value);

export { loading, alternarLoading };
