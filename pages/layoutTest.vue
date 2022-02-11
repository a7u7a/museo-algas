<template>
  <div class="pt-16">
    <div>
      <classTable class="float-right p-4" :tabla="alga.ficha.tabla" />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
        mollitia adipisci? Perferendis provident suscipit libero dolores odio
        mollitia enim maxime ad a consequuntur, ipsa eaque. Quia quis vel animi
        exercitationem dolorem, necessitatibus et doloribus facilis minus fuga
        aliquid a enim quaerat optio autem quos obcaecati vitae corrupti
        accusantium! Ut maxime doloremque nam similique rem obcaecati unde quasi
        eum vitae hic asperiores voluptatibus quisquam adipisci, cum ducimus
        tempora, consectetur cupiditate. Sint dolorem officia consequuntur
        aperiam autem tenetur fugiat nobis asperiores eligendi velit, dolore
        debitis nemo molestias odit. Consequatur asperiores obcaecati architecto
        libero assumenda. Eligendi ad illo tenetur corporis culpa sapiente
        recusandae iure temporibus? Optio at eos magnam culpa saepe ad nulla
        suscipit totam sunt voluptas. Quas omnis quo magni ut et! Sit molestiae
        labore nostrum quidem, magnam quo placeat doloremque porro, numquam
        delectus corporis voluptas? Perferendis aliquid sapiente optio tenetur
        fugiat. Quos ab consequatur voluptate nostrum doloremque ipsum hic
        consectetur sed porro tempora, accusamus quam quibusdam consequuntur
        sunt explicabo, velit autem debitis architecto ea quisquam itaque. Error
        libero nisi nesciunt earum ut, quaerat quidem repudiandae at placeat
        quae ipsam mollitia quam culpa non suscipit, illum cumque? Itaque
        inventore, eum dolor ad dolorum nemo molestias enim amet cumque fugiat
        accusamus recusandae eveniet, reiciendis, eius asperiores laborum
        placeat? Neque quam cumque, praesentium minima numquam aspernatur vitae
        aut repudiandae commodi mollitia iure exercitationem doloremque
        voluptatibus maxime voluptas, quasi omnis. Illum accusamus aut enim at
        porro similique dolore earum, quidem corrupti animi? Dolorum id illum
        neque similique facilis beatae commodi natus ratione minima? Facere
        debitis consectetur architecto voluptas sequi veniam quae labore
        possimus expedita porro nihil tempore alias, non nulla atque eaque dolor
        dolores natus at placeat quos fugit eos nostrum? Iure officiis labore
        et? Natus neque impedit repellat facere velit obcaecati fugit, earum
        dignissimos totam dolorum, sequi corporis sed voluptatum alias nam eos
        minus? Optio, deleniti enim aperiam corporis ducimus tenetur, libero
        voluptas quae maiores veritatis id, officia rerum earum sint dolorem
        fugiat quam necessitatibus tempore accusantium atque deserunt animi
        distinctio. Temporibus praesentium eaque esse omnis odio itaque harum
        fugit aperiam odit facere, asperiores doloremque ipsum dolorem magni,
        aliquid cumque vitae blanditiis assumenda explicabo enim! Eligendi
        voluptatem dolorem ex, odit reprehenderit aliquid, quisquam asperiores
        vel eius nulla consectetur quam ullam voluptas magni! Sint hic quasi
        vero, iure repellat consequatur quibusdam consequuntur harum sit saepe
        eius veritatis. Obcaecati tenetur eius autem est, consequuntur quas
        maxime quo quidem necessitatibus nam voluptate quod accusantium eos
        culpa neque exercitationem sed adipisci, vero quasi rem itaque!
        Voluptates animi exercitationem reprehenderit non dicta deserunt,
        sapiente enim ea vero nisi rerum, eveniet deleniti, illo perspiciatis.
        Saepe pariatur ratione qui, nesciunt provident officiis aliquam sit
        reiciendis deserunt ducimus dolores earum consectetur omnis
        exercitationem, distinctio laudantium in rerum ex, minima dolorem! Eum
        reiciendis est cum quisquam molestias quidem consequuntur quas nihil
        explicabo soluta iure totam magnam nam voluptatum magni sint, officiis
        voluptas mollitia ut rerum harum at. Obcaecati ipsam laborum doloremque
        cum, odio delectus. Est repellendus, error quasi sint, quaerat
        doloremque aliquam quod perspiciatis assumenda temporibus quos facilis
        rem odio dignissimos recusandae quo!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    alga() {
      return this.$store.getters.getAlgaByPath("carola");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>