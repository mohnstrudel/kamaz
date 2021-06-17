class ClientRequestMailer < ApplicationMailer
  default from: 'Заявка на сайте <zakaz@profit-ck.ru>'
  layout 'mailer'

  def notify_admin(request)
    @request = request

    mail to: 'zakaz@profit-ck.ru', subject: "Новая заявка на сайте profit-ck.ru"
  end

  def notify_client(request)
    @request = request
    @email = request.email

    mail to: @email, subject: "Ваша заявки принята"
  end
end
