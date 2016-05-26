class Rules {
  constructor() {
    this.$modal = $('#modal-rules');
    this.$btn = $('#btn-rules');
    this.$span = $('#close-rules');
  }

  prepare() {
    this.$btn.on('click', function() {
      this.$modal.css('display', 'block');
    }.bind(this));

    this.$span.on('click', function() {
      this.$modal.css('display', 'none');
    }.bind(this));

    $("window").on('click', function(e) {
      if (event.target === modal) {
        this.$modal.css('display', 'none');
      }
    }.bind(this));
  }
}

module.exports = Rules;
