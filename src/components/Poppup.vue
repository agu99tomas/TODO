<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text slot="activator" class="success" v-on="on" v-bind="attrs"
        >Add new project</v-btn
      >
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a new project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="mdi-folder"
            :rules="inputRules"
          ></v-text-field>
          <v-textarea
            label="infomation"
            v-model="content"
            prepend-icon="mdi-pencil"
            :rules="inputRules"
          ></v-textarea>
          <v-menu min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="due"
                v-on="on"
                v-bind="attrs"
                label="Due date"
                prepend-icon="mdi-calendar"
                :rules="inputRules"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <v-btn
            text
            class="success mx-0 mt-3"
            @click="submit()"
            :loading="loading"
            >Add project</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import db from "../firebase.js";

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      inputRules: [(v) => v.length >= 3 || "Minimum length is 3 characters"],
      loading: false,
      dialog: false,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        const project = {
          title: this.title,
          content: this.content,
          due: this.due,
          person: "Tomás Agú",
          status: "ongoing",
        };

        db.collection("projects")
          .add(project)
          .then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit('projectAdded', {});
          });
      } else {
        return;
      }
    },
  },
};
</script>

<style></style>
