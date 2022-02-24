<template>
  <v-container>
    <v-alert
      border="left"
      close-text="Close Alert"
      color="green accent-4"
      dark
      dismissible
      v-if="this.$route.params.message"
      >{{ this.$route.params.message }}</v-alert
    >
    <v-row no-gutters>
      <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id">
        <!-- Card -->
        <v-card class="pa-1" :to="{ name: 'post', params: { id: post._id } }">
          <!-- Image -->
          <v-img height="250" :src="`/${post.image}`"></v-img
          ><!-- End of Image -->
          <!-- Button Category -->
          <v-btn class="ml-4 mt-3" small outlined color="indigo">
            {{ post.category }}
          </v-btn>
          <!-- End of Button Category -->
          <!-- Title -->
          <v-card-title class="headline">{{ post.title }}</v-card-title>
          <!-- End of Title -->
          <!-- Character Content -->
          <v-card-text class="py-0"
            ><p>{{ post.content.substring(0, 100) + "..." }}</p></v-card-text
          >
          <!-- End of Character Content -->
        </v-card>
        <!-- End of Card -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "../api";
export default {
  name: "Home",
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    this.posts = await API.getAllPost();
  },
};
</script>
