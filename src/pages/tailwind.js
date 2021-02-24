import React, {useEffect} from 'react';

function Stylesheet() {
  useEffect(() => {
    if (process.browser)
      document.querySelector('footer').innerHTML += `<style>#__next {
  display: inherit !important;
}</style>`;
    return () => {};
  }, []);

  return (
    <>
      {/**
       * NAV
       * */}
      <div className="spaced uppercase p-2xl fixed bg-gray-darkest  w-full">
        <a className=" text-white" href="#colors">
          colors
        </a>
        <a className="text-white" href="#text">
          text
        </a>
        <a className="text-white" href="#padding">
          padding
        </a>
        <a className="text-white" href="#margin">
          margin
        </a>
        <a className="text-white" href="#elements">
          elements
        </a>
        <a className="text-white" href="#shadows">
          shadows
        </a>
        <a className="text-white" href="#colors">
          colors
        </a>
        <a className="text-white" href="#containers">
          Container
        </a>
      </div>

      {/**
       * COLORS
       * */}
      <section
        id="colors"
        className="md:grid lg:grid xl:grid bg-gray-lightest grid-cols-4 items-center gap-lg p-4xl sm:grid-flow-col-dense"
      >
        <h1 className="text-center p-md uppercase mt-6xl col-span-4">Colors</h1>
        <div className="bg-gray-light p-lg flex m-xs shadow-xl border-2 flex">
          <div className="bg-primary-lightest flex-auto"></div>
          <div className="bg-primary-light flex-auto"></div>
          <div className="bg-primary flex-auto">
            <h3 className="text-center p-md uppercase text-white">Primary</h3>
          </div>
          <div className="bg-primary-dark flex-auto"></div>
          <div className="bg-primary-darkest flex-auto"></div>
        </div>
        <div className="bg-gray-light p-lg flex m-xs shadow-xl border-2 flex">
          <div className="bg-secondary-lightest flex-auto"></div>
          <div className="bg-secondary-light flex-auto"></div>
          <div className="bg-secondary flex-auto">
            <h3 className="text-center p-md uppercase text-white">Secondary</h3>
          </div>
          <div className="bg-secondary-dark flex-auto"></div>
          <div className="bg-secondary-darkest flex-auto"></div>
        </div>
        <div className="bg-gray-light p-lg flex m-xs shadow-xl border-2 flex">
          <div className="bg-gray-lightest flex-auto"></div>
          <div className="bg-gray-light flex-auto"></div>
          <div className="bg-gray flex-auto">
            <h3 className="text-center p-md uppercase text-white">Gray</h3>
          </div>
          <div className="bg-gray-dark flex-auto"></div>
          <div className="bg-gray-darkest flex-auto"></div>
        </div>
        <div className="bg-gray-light p-lg flex m-xs shadow-xl border-2 flex">
          <div className="bg-green-lightest flex-auto"></div>
          <div className="bg-green-light flex-auto"></div>
          <div className="bg-green flex-auto">
            <h3 className="text-center p-md uppercase text-white">Green</h3>
          </div>
          <div className="bg-green-dark flex-auto"></div>
          <div className="bg-green-darkest flex-auto"></div>
        </div>
        <div className="bg-gray-light p-lg flex m-xs shadow-xl border-2 flex">
          <div className="bg-red-lightest flex-auto"></div>
          <div className="bg-red-light flex-auto"></div>
          <div className="bg-red flex-auto">
            <h3 className="text-center p-md uppercase text-white">Red</h3>
          </div>
          <div className="bg-red-dark flex-auto"></div>
          <div className="bg-red-darkest flex-auto"></div>
        </div>
        <div className="bg-gray-light p-lg flex m-xs shadow-xl border-2 flex">
          <div className="bg-blue-lightest flex-auto"></div>
          <div className="bg-blue-light flex-auto"></div>
          <div className="bg-blue flex-auto">
            <h3 className="text-center p-md uppercase text-white">blue</h3>
          </div>
          <div className="bg-blue-dark flex-auto"></div>
          <div className="bg-blue-darkest flex-auto"></div>
        </div>
        <div className="bg-gray-light p-lg flex m-xs shadow-xl border-2 flex">
          <div className="bg-yellow-lightest flex-auto"></div>
          <div className="bg-yellow-light flex-auto"></div>
          <div className="bg-yellow flex-auto">
            <h3 className="text-center p-md uppercase text-white">yellow</h3>
          </div>
          <div className="bg-yellow-dark flex-auto"></div>
          <div className="bg-yellow-darkest flex-auto"></div>
        </div>
      </section>

      {/**
       * SHADOWS
       * */}
      <section
        id="text"
        className="bg-secondary-light flex justify-center items-center p-4xl flex-wrap"
      >
        <h1 className="text-center p-md uppercase mt-6xl col-span-4 flex-none w-100">
          Text
        </h1>
        <article className="prose prose-lg p-lg">
          <h1>Garlic bread with cheese: What the science tells us</h1>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf htmlFor Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
          <h2>Garlic bread with cheese: What the science tells us</h2>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf htmlFor Halloween.
          </p>
        </article>
        <article className="prose prose-lg p-lg">
          <h3>Garlic bread with cheese: What the science tells us</h3>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
          <h4>Garlic bread with cheese: What the science tells us</h4>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
          <h5>Garlic bread with cheese: What the science tells us</h5>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
        </article>
      </section>

      {/**
       * PADDING
       * */}
      <section
        id="padding"
        className="bg-primary-light flex justify-center items-center p-4xl flex-wrap p-4xl"
      >
        <h1 className="text-center p-md uppercase mt-6xl min-w-100">Padding</h1>
        <div className="bg-primary p-xs m-xs shadow-xl border-2 self-center">
          <div className="min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">p-xs</h3>
          </div>
        </div>
        <div className="bg-primary p-sm m-xs shadow-xl border-2 self-center">
          <div className="min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">p-sm</h3>
          </div>
        </div>
        <div className="bg-primary p-md m-xs shadow-xl border-2 self-center">
          <div className="min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">p-md</h3>
          </div>
        </div>
        <div className="bg-primary p-lg m-xs shadow-xl border-2">
          <div className="min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">p-lg</h3>
          </div>
        </div>
        <div className="bg-primary p-xl m-xs shadow-xl border-2">
          <div className="min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">p-xl</h3>
          </div>
        </div>
        <div className="bg-primary p-2xl  m-xs shadow-xl border-2">
          <div className="min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">p-2xl</h3>
          </div>
        </div>
        <div className="bg-primary p-3xl  m-xs shadow-xl border-2 self-center">
          <div className="min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">p-3xl</h3>
          </div>
        </div>
        <div className="bg-primary p-4xl  m-xs shadow-xl border-2 self-center">
          <div className="min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">p-4xl</h3>
          </div>
        </div>
        <div className="bg-primary p-5xl  m-xs shadow-xl border-2 self-center">
          <div className="min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">p-5xl</h3>
          </div>
        </div>
        <div className="bg-primary p-6xl  m-xs shadow-xl border-2 self-center">
          <div className="min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">p-6xl</h3>
          </div>
        </div>
        <div className="bg-primary p-7xl  m-xs shadow-xl border-2 self-center">
          <div className="min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">p-7xl</h3>
          </div>
        </div>
      </section>

      {/**
       * MARGIN
       * */}
      <section
        id="margin"
        className="bg-secondary-light flex justify-center items-center p-4xl flex-wrap p-4xl"
      >
        <h1 className="text-center p-md uppercase mt-6xl  min-w-100">Margin</h1>
        <div className="bg-secondary m-xs shadow-xl border-2">
          <div className="m-xs bg-gray-lightest">
            <h3 className="text-center p-md">m-xs</h3>
          </div>
        </div>
        <div className="bg-secondary m-xs shadow-xl border-2">
          <div className="m-sm bg-gray-lightest">
            <h3 className="text-center p-md">m-sm</h3>
          </div>
        </div>
        <div className="bg-secondary m-xs shadow-xl border-2">
          <div className="m-md bg-gray-lightest">
            <h3 className="text-center p-md">m-md</h3>
          </div>
        </div>
        <div className="bg-secondary m-xs shadow-xl border-2">
          <div className="m-lg bg-gray-lightest">
            <h3 className="text-center p-md">m-lg</h3>
          </div>
        </div>
        <div className="bg-secondary m-xs shadow-xl border-2">
          <div className="m-xl min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">m-xl</h3>
          </div>
        </div>
        <div className="bg-secondary m-xs shadow-xl border-2">
          <div className="m-2xl bg-gray-lightest">
            <h3 className="text-center p-md">m-2xl</h3>
          </div>
        </div>
        <div className="bg-secondary m-xs shadow-xl border-2">
          <div className="m-3xl bg-gray-lightest">
            <h3 className="text-center p-md">m-3xl</h3>
          </div>
        </div>
        <div className="bg-secondary m-xs shadow-xl border-2">
          <div className="m-4xl bg-gray-lightest">
            <h3 className="text-center p-md">m-4xl</h3>
          </div>
        </div>
        <div className="bg-secondary m-xs shadow-xl border-2">
          <div className="m-5xl bg-gray-lightest">
            <h3 className="text-center p-md">m-5xl</h3>
          </div>
        </div>
        <div className="bg-secondary m-xs shadow-xl border-2">
          <div className="m-6xl bg-gray-lightest">
            <h3 className="text-center p-md">m-6xl</h3>
          </div>
        </div>
        <div className="bg-secondary m-xs shadow-xl border-2">
          <div className="m-7xl bg-gray-lightest">
            <h3 className="text-center p-md">m-7xl</h3>
          </div>
        </div>
      </section>

      {/**
       * ELEMENTS
       * */}
      <section
        id="elements"
        className="bg-primary-light md:grid lg:grid xl:grid grid-cols-2 items-center gap-lg p-4xl"
      >
        <h1 className="text-center col-span-2 p-md uppercase mt-6xl  min-w-100">
          Elements
        </h1>
        <section className="grid grid-cols-2 items-center gap-lg p-4xl">
          <h2 className="text-center p-md uppercase">Form</h2>
          <div></div>
          <form>
            <fieldset className="labeled">
              <label htmlFor="intext">Text:</label>
              <input id="intext" type="text" value="Text" />
            </fieldset>
            <fieldset className="labeled">
              <label htmlFor="innr">Nr:</label>
              <input id="innr" type="number" placeholder="123" />
            </fieldset>
            <fieldset className="labeled">
              <label htmlFor="inemail">Email:</label>
              <input id="inemail" type="email" placeholder="example@test.com" />
            </fieldset>
            <fieldset className="labeled">
              <label htmlFor="inpw">Password:</label>
              <input id="inpw" type="password" value="1234" />
            </fieldset>
            <fieldset>
              <label htmlFor="jetzt">Val1</label>
              <input name="radiogrp" type="radio" id="jetzt" value="current" />
              <label htmlFor="heute">Val2</label>
              <input name="radiogrp" type="radio" id="heute" value="tomorrow" />
              <label htmlFor="fiveday">Val3</label>
              <input
                name="radiogrp"
                type="radio"
                id="fiveday"
                value="fiveday"
              />
            </fieldset>
          </form>
        </section>
        <section>
          <h2 className="text-center p-md uppercase">Spaced</h2>
          <div className="spaced min-h-75 m-sm">
            <div className="bg-secondary-dark w-50 text-white">
              <p className="text-center p-xl">spaced</p>
            </div>
            <div className="bg-secondary-darkest w-50 text-white">
              <p className="text-center p-xl">spaced</p>
            </div>
          </div>
          <div className="spaced-lg min-h-75 m-sm">
            <div className="bg-secondary-dark w-50 text-white">
              <p className="text-center p-xl">spaced-lg</p>
            </div>
            <div className="bg-secondary-darkest w-50 text-white">
              <p className="text-center p-xl">spaced-lg</p>
            </div>
          </div>
        </section>
        <section className="modal demo">
          <h2 className="text-center p-md uppercase">Modal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            atque saepe repudiandae magnam sequi laboriosam sint explicabo
            voluptas autem ipsa!
          </p>
        </section>
        <section className="p-4xl">
          <h2 className="text-center p-md uppercase">Buttons</h2>
          <div className="spaced items-center justify-center">
            <button className="btn-primray">Button</button>
            <button className="btn-secondary">Button</button>
            <button className="btn-success">Button</button>
          </div>
        </section>
      </section>

      {/**
       * SHADOWS
       * */}
      <section
        id="shadow"
        className="bg-secondary-light flex justify-center items-center min-h-75 p-4xl flex-wrap p-4xl"
      >
        <h1 className="text-center p-md uppercase mt-6xl  min-w-100">
          Shadows
        </h1>
        <div className="bg-secondary m-xs shadow-sm border-2">
          <div className="m-6xl bg-gray-lightest">
            <h3 className="text-center p-md">shadow-sm</h3>
          </div>
        </div>
        <div className="bg-secondary m-xs shadow border-2">
          <div className="m-6xl bg-gray-lightest">
            <h3 className="text-center p-md">shadow</h3>
          </div>
        </div>
        <div className="bg-secondary m-xs shadow-md border-2">
          <div className="m-6xl bg-gray-lightest">
            <h3 className="text-center p-md">shadow-md</h3>
          </div>
        </div>
        <div className="bg-secondary m-xs shadow-lg border-2">
          <div className="m-6xl bg-gray-lightest">
            <h3 className="text-center p-md">shadow-lg</h3>
          </div>
        </div>
        <div className="bg-secondary m-xs shadow-xl border-2">
          <div className="m-6xl min-h-100 bg-gray-lightest">
            <h3 className="text-center p-md">shadow-xl</h3>
          </div>
        </div>
        <div className="bg-secondary m-xs shadow-inner border-2">
          <div className="m-6xl bg-gray-lightest">
            <h3 className="text-center p-md">shadow-inner</h3>
          </div>
        </div>
        <div className="bg-secondary m-xs shadow-none border-2">
          <div className="m-6xl bg-gray-lightest">
            <h3 className="text-center p-md">shadow-none</h3>
          </div>
        </div>
      </section>

      {/**
       * CONTAINERS
       * */}
      <section
        id="containers"
        className="bg-gray-lightest items-center min-h-75"
      >
        <h1 className="text-center p-md uppercase mt-6xl  min-w-100">
          Container
        </h1>
        <div className="container-normal px-xs  mt-lg mb-lb">
          <div className="flex items-center justify-center bg-primary min-h-50">
            <article className="prose prose-lg p-lg">
              <h1>Normal px-xs</h1>
              <p>
                For years parents have espoused the health benefits of eating
                garlic bread with cheese to their children, with the food
                earning such an iconic status in our culture that kids will
                often dress up as warm, cheesy loaf htmlFor Halloween.
              </p>
            </article>
          </div>
        </div>
        <div className="container-normal px-4xl mt-lg mb-lb">
          <div className="flex items-center justify-center bg-primary min-h-50">
            <article className="prose prose-lg p-lg">
              <h1>Normal px-4xl</h1>
              <p>
                For years parents have espoused the health benefits of eating
                garlic bread with cheese to their children, with the food
                earning such an iconic status in our culture that kids will
                often dress up as warm, cheesy loaf htmlFor Halloween.
              </p>
            </article>
          </div>
        </div>
        <div className="container-full  mt-lg mb-lb">
          <div className="flex items-center justify-center bg-primary min-h-50">
            <article className="prose prose-lg p-lg">
              <h1>Full/Fluid</h1>
              <p>
                For years parents have espoused the health benefits of eating
                garlic bread with cheese to their children, with the food
                earning such an iconic status in our culture that kids will
                often dress up as warm, cheesy loaf htmlFor Halloween.
              </p>
              <p>
                But a recent study shows that the celebrated appetizer may be
                linked to a series of rabies cases springing up around the
                country.
              </p>
            </article>
          </div>
        </div>
      </section>
      <footer></footer>
    </>
  );
}

export default Stylesheet;
