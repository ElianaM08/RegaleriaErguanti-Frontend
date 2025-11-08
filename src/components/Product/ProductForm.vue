<template>
  <form @submit.prevent="onSubmit" class="product-form">
    <label>Nombre</label>
    <input v-model="form.name" required />

    <label>Descripción</label>
    <textarea v-model="form.description"></textarea>

    <label>Precio</label>
    <input v-model.number="form.price" type="number" step="0.01" required />

    <label>Stock</label>
    <input v-model.number="form.stock" type="number" required />

    <label>Imagen (URL)</label>
    <input v-model="form.imageUrl" />

    <button type="submit">{{ isEdit ? "Guardar Cambios" : "Crear Producto" }}</button>
  </form>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  initialData: { type: Object, default: () => ({}) },
  isEdit: Boolean
});
const emit = defineEmits(["submit"]);

const form = ref({ ...props.initialData });

watch(() => props.initialData, (newVal) => {
  form.value = { ...newVal };
});

const onSubmit = () => {
  emit("submit", form.value);
};
</script>

<style scoped>
.product-form {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  max-width: 400px;
}
</style>
