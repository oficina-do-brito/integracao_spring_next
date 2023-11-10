export default function Depoimento() {
  return (
    <div className="row w-100 h-auto p-5 bg-container-figure">
        <figure className="flex-column align-items-center col-sm-12 col-md-4">
          <blockquote className="blockquote ">
            <p>É sempre um prazer viajar com vocês.</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Brazil, <cite title="Source Title">Ricardo E.</cite>
          </figcaption>
        </figure>
        <figure className="flex-column align-items-center col-sm-12 col-md-4">
          <blockquote className="blockquote">
            <p>
              Viajo sempre que posso, recomendo essa agência possui otimo
              atendimento e nunca me deixou na mão..
            </p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Brazil, <cite title="Source Title">Mariana L.</cite>
          </figcaption>
        </figure>
        <figure className="flex-column align-items-center col-sm-12 col-md-4">
          <blockquote className="blockquote">
            <p>
              A agencia muito boa, possui preços razoavelmente bons para os
              serviços que eles oferecem.
            </p>
          </blockquote>
          <figcaption className="blockquote-footer">
            California, <cite title="Source Title">John Twarte</cite>
          </figcaption>
        </figure>
      </div>
  );
}
