<template>
  <div class="admin-container">
    <h1>Administrar Productos</h1>
    <h2 class="create-title">Crear nuevo producto</h2>
    <div class="form">
      <ProductForm @submit="create"/>
    </div>

    <hr />

    <h2>Listado de productos</h2>
    <div class="admin-list">
      <div class="admin-row" v-for="p in store.products" :key="p.id">
        <span>{{ p.name }} - ${{ p.price }}</span>

        <div>
          <button class="btn-edit" @click="select(p)">Editar</button>
          <button class="btn-delete" @click="remove(p.id)">Eliminar</button>
        </div>
      </div>
    </div>

    <div v-if="editProduct">
      <h2>Editar producto</h2>
      <ProductForm :initialData="editProduct" isEdit @submit="update" />
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from "@/stores/ProductStore";
import { ref, onMounted } from "vue";
import ProductForm from "@/components/Product/ProductForm.vue";

const store = useProductStore();
const editProduct = ref(null);

onMounted(() => store.fetchProducts());

const create = async (data) => await store.createProduct(data);
const select = (p) => (editProduct.value = { ...p });
const update = async (data) => {
  await store.updateProduct(editProduct.value.id, data);
  editProduct.value = null;
};
const remove = async (id) => store.deleteProduct(id);
</script>

<style scoped>
.admin-container {
  padding: 2rem;
}

h1 {
  margin-bottom: 1rem;
  margin-top: 80px;
  display: grid;
  justify-content: center;
  color:#d1a57a;
}
.create-title{
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.form {
  display: flex;
  justify-content: center;
}

.admin-list {
  margin-top: 1rem;
}

.admin-row {
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-bottom: 0.5rem;
}

.btn-edit {
  background: #ffc107;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 0.5rem;
}

.btn-edit:hover {
  background: #e0a800;
}

.btn-delete {
  background: #dc3545;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  color: white;
}

.btn-delete:hover {
  background: #b52a37;
}
</style>

