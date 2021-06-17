class ClientRequest < ApplicationRecord

  def send_mails
    ClientRequestMailer.notify_admin(self).deliver_now

    ClientRequestMailer.notify_client(self).deliver_now
  end
end
