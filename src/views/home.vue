<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-btn
              :loading="loading"
              :disabled="loading"
              color="blue-grey"
              class="ma-2 white--text"
              @click="loadItems"
          >
            Загрузить данные
            <v-icon
                right
                dark
            >
              mdi-cloud-upload
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col name="list" tag="p" class="home__items-list"
               v-for="item in items"
               :key="item.userId"
               cols="12" sm="6" md="4">

          <v-card class="pa-4"
                  elevation="9"

          >
            <div class="d-flex justify-space-between">
              <h2>Пользователь {{ item.userId }}</h2>
              <div>
                <span>{{ item.completed }} / {{ item.titles.length - item.completed }}</span>
              </div>
            </div>
            <ul class="mt-5">
              <li v-for="title in item.titles" :key="title.id">{{ title.title }}</li>
            </ul>
          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    ...mapGetters([
      'todos'
    ]),
    items() {
      let arr = this.todos;
      let counts = {};
      arr.forEach(el => {
        el.titles.forEach(item => {
          if (item.completed) {
            el.completed++; //считаем кол-во completed для одного userId
          }
        });

        counts[el.completed] = (counts[el.completed] || 0) + 1; //кол-во повторений сompleted в виде объекта
      });


      for (const prop in counts) {
        if(prop >= 2) { //sort по userId
          return arr.sort((a, b) => a.userId - b.userId);
        }
      }

      return arr.sort((a, b) => b.completed - a.completed);;
    }
  },
  methods: {
    loadItems() {
      this.loading = true;
      const url = 'https://jsonplaceholder.typicode.com/todos';
      this.$store.dispatch('fetchAllItems', url)
          .then(() => {
            this.loading = false;
          })
    }
  }

}
</script>
<style lang="scss">
.home {
  padding-top: 60px;

  .v-btn {
    width: 100%;
  }

  &__items-list {
    &::-webkit-scrollbar {
      width: 0;
    }

    overflow: auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

  }
}
</style>
