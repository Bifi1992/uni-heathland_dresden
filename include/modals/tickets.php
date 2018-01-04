<div class="modal fade modal-tickets" tabindex="-1" role="dialog" aria-labelledby="ticketsTitle"
     aria-hidden="true">
  <div class="modal-dialog modal-xs" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ticketsTitle">Tickets</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
          <div class="row">

            Der Ticketverkauf startet am <?php  $date = date("d.m.Y");
              echo date("d.m.Y", strtotime($date. '+ 1 day'));
              ?> um 12.00 Uhr.<br>Wir freuen uns auf euch.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
