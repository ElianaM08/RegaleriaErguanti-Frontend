<template>
  <form @submit.prevent="onSubmit" class="product-form">
    <label>Nombre</label>
    <input v-model="form.name" required />

    <label>Descripción</label>
    <textarea v-model="form.description"></textarea>

    <label>Precio</label>
    <input v-model.number="form.price" type="number" required />

    <label>Stock</label>
    <input v-model.number="form.stock" type="number" required />

    <label>Imagen (URL)</label>
    <input type="file" @change="onFileChange" />

    <button type="submit" class="btn-submit">
      {{ isEdit ? "Guardar cambios" : "Crear producto" }}
    </button>
  </form>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  initialData: { type: Object, default: () => ({}) },
  isEdit: Boolean,
});
const emit = defineEmits(["submit"]);

const form = ref({ ...props.initialData });
const imageFile = ref(null);

watch(() => props.initialData, (v) => (form.value = { ...v }));

const onFileChange = (e) => {
  imageFile.value = e.target.files[0];
};
const onSubmit = () => {
  const data = new FormData();
  
  data.append("name", form.value.name);
  data.append("description", form.value.description);
  data.append("price", form.value.price);
  data.append("stock", form.value.stock);

  
  if (imageFile.value) {
    data.append("image", imageFile.value);
  }

  emit("submit", data);
};
</script>

<style scoped>
.product-form {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  max-width: 400px;
  padding: 1rem 0;
}

.product-form input,
.product-form textarea {
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 6px;
}

.btn-submit {
  margin-top: 0.5rem;
  padding: 0.6rem 1rem;
  background: #0077ff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn-submit:hover {
  background: #005fcc;
}
</style>

