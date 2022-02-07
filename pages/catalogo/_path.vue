<template>
  <div class="flex flex-col w-screen items-center font-serif">
    <div class="pt-24 w-7/12">
      <div class="mb-8">
        <div class="text-3xl italic">{{ alga.ficha.especie }}</div>
        <div class="flex mt-4 flex-row space-x-4">
          <p>Características</p>
          <p>Representación</p>
          <p>Herborización</p>
        </div>
      </div>

      <div class="text-xl">Características</div>

      <div class="text-lg">
        {{ alga.ficha.tabla.titulo }}
      </div>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
        dignissimos assumenda atque recusandae nihil provident molestiae rem
        praesentium soluta. Magni, itaque quam nobis provident aspernatur
        reprehenderit expedita dolorem? Rem, ipsam! Deserunt dolor ea eius quae
        nam? Quae sit assumenda maiores mollitia voluptatibus cupiditate
        laboriosam aperiam nemo laborum perspiciatis voluptatum rem dicta odio
        praesentium vel, nisi non quibusdam sapiente, quia nam voluptate! Vel
        dolores delectus earum veritatis, reiciendis, ipsum repellat laboriosam
        odit voluptatum cum, dignissimos aliquam recusandae tenetur quasi. Id
        accusamus, rerum velit mollitia assumenda qui cumque temporibus
        praesentium inventore sequi beatae minima. Adipisci numquam corrupti
        magni totam aliquid consequuntur recusandae in, mollitia neque
        asperiores labore unde, qui at sint aliquam cupiditate officiis non fuga
        atque, quae molestiae quam animi perferendis expedita! Molestias,
        praesentium quis, nemo cumque neque quasi dicta aliquid, necessitatibus
        omnis consectetur rerum libero veniam magnam voluptas officiis fugit
        voluptatibus pariatur rem exercitationem reprehenderit possimus labore!
        Autem voluptatibus minima nam iure maxime velit ex facilis numquam
        alias! Voluptas quisquam cupiditate doloremque laborum perspiciatis
        magnam voluptatibus ratione totam dolore! Tempora, eaque? Autem a ipsa,
        neque doloremque qui molestiae culpa aperiam obcaecati est recusandae
        nostrum possimus tempore quo quas laboriosam provident saepe sint cumque
        laudantium illo facilis odit? Numquam id quod est nostrum laudantium,
        cum, cupiditate sapiente illum sed nesciunt, voluptatibus hic esse
        suscipit delectus voluptatum. Maxime laudantium dolore aspernatur
        impedit eligendi, fugit repellat delectus magni ducimus rem cumque modi
        cum placeat, ullam odit atque tempore quas perspiciatis vitae veritatis.
        Eaque voluptate excepturi exercitationem voluptatibus magni sequi odio
        similique quod eius, quas at, maiores, pariatur harum repellendus
        suscipit cumque neque rem a doloremque! Ad, illum repellendus?
        Temporibus, hic aspernatur quasi accusamus eaque ex perferendis nesciunt
        mollitia repellat, porro alias quod, quaerat distinctio deserunt dolores
        labore? Fuga temporibus laudantium sed modi aperiam, quod laborum!
        Maiores, fugit sed? Ab officia iure quasi inventore, eveniet accusantium
        mollitia dolores, alias soluta nisi explicabo fugit tempora eligendi
        exercitationem ut blanditiis neque eius? Voluptas, neque est dolorem
        nobis soluta iusto doloremque ad totam repellat eius quas voluptate
        suscipit commodi, aut labore. Neque voluptatibus accusantium ratione
        ullam, aspernatur enim. Tempora facilis aperiam quam, consectetur ipsa
        est corporis ad quasi pariatur. Sed ex cumque placeat dicta porro
        cupiditate eveniet minus. Perferendis quod asperiores quo, quasi vel
        suscipit laboriosam. Laudantium laboriosam sit ipsa, voluptate atque
        quae qui aperiam eligendi temporibus ab tempore provident quidem. Iste
        accusantium libero molestiae expedita incidunt dolorem autem ipsam
        assumenda delectus quia ullam aperiam dolorum odio, maiores inventore
        debitis, recusandae quis. Consequatur ea iste dolorum alias labore,
        facilis quam commodi quo, distinctio harum repudiandae eos animi rerum
        qui a obcaecati laudantium, perspiciatis saepe vero modi adipisci quas
        doloremque. Blanditiis dicta quia, unde illo eos iste ipsa. Consequatur
        inventore reprehenderit corrupti, quae in a deserunt illo, culpa
        blanditiis vitae fugiat voluptatibus ab impedit id cumque. Voluptate
        iste non culpa autem dolor repellendus animi saepe, quam dicta? Optio,
        sapiente ipsam unde quos officia neque facilis modi et id accusamus
        voluptatum eveniet temporibus exercitationem sint atque nam aperiam
        officiis hic dignissimos omnis minima voluptate? Tempore facere illum
        beatae pariatur?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function () {
    window.addEventListener("scroll", function () {
      console.log(window.scrollY);
    });
  },
  // methods:{
  //     test: function(){
  //         console.log(window.scrollY)
  //     }
  // },
  computed: {
    alga() {
      return this.$store.getters.getAlgaByPath(this.$route.params.path);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>