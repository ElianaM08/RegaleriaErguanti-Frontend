<template>
  <div>
    <h1>Administrar Productos</h1>

    <ProductForm @submit="create" />

    <hr />

    <div v-for="p in store.products" :key="p.id" class="admin-item">
      <span>{{ p.name }} - ${{ p.price }}</span>
      <button @click="select(p)">Editar</button>
      <button @click="remove(p.id)">Eliminar</button>
    </div>

    <div v-if="editProduct">
      <h2>Editar Producto</h2>
      <ProductForm :initialData="editProduct" isEdit @submit="update" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useProductStore } from "@/stores/ProductStore";
import ProductForm from "@/components/Product/ProductForm.vue";

const store = useProductStore();
const editProduct = ref(null);

onMounted(() => store.fetchProducts());

const create = async (data) => {
  await store.createProduct(data);
};

const select = (p) => {
  editProduct.value = { ...p };
};

const update = async (data) => {
  await store.updateProduct(editProduct.value.id, data);
  editProduct.value = null;
};

const remove = async (id) => {
  await store.deleteProduct(id);
};
</script>

<style scoped>
.admin-item {
  display: flex;
  justify-content: space-between;
  margin: .5rem 0;
}
</style>
