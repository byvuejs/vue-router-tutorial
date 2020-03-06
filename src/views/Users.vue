<template>
  <v-layout
    row wrap pt-5 text-xs-center
    style="max-width:500px; margin: 0 auto;"
  >
    <v-flex xs12>
        <h1>Users</h1>
        <p>유저를 검색해 주세요.</p>
    </v-flex>

    <v-text-field v-model="userId" label="유저 번호를 입력하세요."></v-text-field>
    <v-btn @click="$router.push({ name: 'users-detail', params: { id: userId }})">검색</v-btn>
    
    <v-flex xs12>
        <router-view></router-view>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    data() {
        return {
            userId: null
        }
    },
    // 컴포넌트에서 정의
    beforeRouteEnter (to, from, next) { // 라우터가 해당 페이지 접속하기 전에
        console.log('before Route Enter');
        next();
    },
    beforeRouteLeave (to, from, next) { // 라우터가 해당 페이지 떠나기 직전
        console.log('before Route Leave');
        next();
    },
    created() {
        console.log('created');
    },
    destroyed() {
        console.log('destroyed');
    }
}
</script>
