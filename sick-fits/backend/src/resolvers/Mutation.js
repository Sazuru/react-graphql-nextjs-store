const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );

    console.log(item);

    return item;
  },
  updateItem(parent, args, ctx, info) {
    //Возьмем копию обновлений
    const updates = { ...args };
    // удаляем ID из обновлений
    delete updates.id;
    //запускаем метод обновлений
    return ctx.db.mutation.updateItem({
      data: updates,
      where: {
        id: args.id
      },
      info
    });
  }
};

module.exports = Mutations;
