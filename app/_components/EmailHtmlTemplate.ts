export function buildContactEmailHtml({
  email,
  subject,
  message,
}: {
  email: string;
  subject: string;
  message: string;
}) {
  const escape = (str: string) =>
    str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:32px 0;font-family:Helvetica,Arial,sans-serif;">
    <tr>
      <td align="center">
        <table width="480" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e4e4e7;">
          <tr>
            <td style="background-color:#18181b;padding:20px 28px;">
              <span style="color:#ffffff;font-size:16px;font-weight:600;">New portfolio message</span>
            </td>
          </tr>
          <tr>
            <td style="padding:28px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:16px;">
                    <span style="display:block;font-size:11px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.05em;">From</span>
                    <span style="display:block;font-size:14px;color:#18181b;margin-top:4px;">${escape(email)}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:16px;border-top:1px solid #f0f0f1;padding-top:16px;">
                    <span style="display:block;font-size:11px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.05em;">Subject</span>
                    <span style="display:block;font-size:14px;color:#18181b;margin-top:4px;">${escape(subject)}</span>
                  </td>
                </tr>
                <tr>
                  <td style="border-top:1px solid #f0f0f1;padding-top:16px;">
                    <span style="display:block;font-size:11px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.05em;">Message</span>
                    <span style="display:block;font-size:14px;color:#3f3f46;margin-top:8px;line-height:1.6;white-space:pre-wrap;">${escape(message)}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`;
}
