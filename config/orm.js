<div class="jumbotron">
  <h1 class="display-4">Burgers</h1>
  <p class="lead">I know you want a burger. But you can't, because all of the restaurants are closed due to COVID-19.
    You are left to fantasize about all the kinds of burgers and imagine the taste.</p>
  <form class="create-form form-inline mx-auto">
    <div class="form-group mb-2">
      <input placeholder="Burger Name" class="form-control mr-2" type="text" id="burg" name="name">
    </div>
    <button type="submit" class="btn btn-primary mb-2">Add Burger</button>
  </form>
</div>

<div class="container">
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <li class="list-group-item active">
          <span style="font-weight: 700">Ready to eat!</span>
        </li>
        {{#each burgers}}
        {{#unless devoured}}
        {{> burgers/burger-block devour=true}}
        {{/unless}}
        {{/each}}
      </ul>
    </div>

    <div class="col">
      <ul class="list-group">
        <li class="list-group-item active">
          <span style="font-weight: 700">Devoured!</span>
        </li>
        {{#each burgers}}
        {{#if devoured}}
        {{> burgers/burger-block devour=false}}
        {{/if}}
        {{/each}}
      </ul>

    </div>
  </div>
</div>