<template>
  <nav>

    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Awesome! you added a new project.</span>
      <v-btn text color="white" @click="snackbar=false">Close</v-btn>
    </v-snackbar>

    <v-app-bar flat>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">
          Todo
        </span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text color="grey" v-bind="attrs" v-on="on">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app temporary v-model="drawer" class="primary">
      <v-container>
        <v-row>
          <v-col class="mt-5" align="center">
            <v-avatar size="100">
              <img src="/avatar-1.png" alt="" />
            </v-avatar>
            <p class="white--text subtitle-1">Tomás Agú</p>
          </v-col>
        </v-row>
        <v-row class="mt-1 mb-1">
          <v-col align="center">
          <Popup @projectAdded="snackbar = true" />
          </v-col>
        </v-row>
      </v-container>

      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Poppup.vue";
export default {
  components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account", text: "Team", route: "/team" },
      ],
      snackbar: false,
    };
  },
};
</script>
