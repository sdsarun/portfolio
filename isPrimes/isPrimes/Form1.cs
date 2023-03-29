using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml.Schema;

namespace isPrimes
{
    public partial class MainForms : Form
    {
        public MainForms()
        {
            InitializeComponent();
        }

        // move forms section
        protected override void WndProc(ref Message m)
        {
            switch (m.Msg)
            {
                case 0x84:
                    base.WndProc(ref m);
                    if ((int)m.Result == 0x1)
                        m.Result = (IntPtr)0x2;
                    return;
            }

            base.WndProc(ref m);
        }
        private void ProcessButton_Click(object sender, EventArgs e)
        {
            string num = InputNumber.Text;
            BigInteger tmpNum, targetNum, divisor = 1;
            bool success = BigInteger.TryParse(num, out tmpNum); 

            if (success)
            {
                targetNum = BigInteger.Parse(num);
                if (targetNum == 1 || targetNum == 0)
                {
                    StatusEvents.Text = targetNum + " is not Prime number!";
                    StatusEvents.ForeColor = System.Drawing.Color.Red;
                    return;
                } else if (targetNum < 0)
                {
                    MessageBox.Show("Invalid input!\nInput should be positive number.", "IsPrimes", 0, MessageBoxIcon.Error);
                    return;
                }
                if (isPrime(targetNum, ref divisor))
                {
                    StatusEvents.Text = targetNum + " is a Prime number!";
                    StatusEvents.ForeColor = System.Drawing.Color.Green;
                }
                else
                {
                    StatusEvents.Text = targetNum + " is not Prime number!, its can divided by " + divisor + ".";
                    StatusEvents.ForeColor = System.Drawing.Color.Red;
                }
            }
            else
            {
                if (InputNumber.Text == "")
                {
                    StatusEvents.Text = "Please enter a number.";
                    StatusEvents.ForeColor = System.Drawing.Color.FromArgb(25, 102, 218);
                    return;
                }
                else
                {
                    StatusEvents.Text = "Invalid input! its should be integer and positive number.";
                    StatusEvents.ForeColor = System.Drawing.Color.FromArgb(140, 116, 26);
                    return;
                }
            }
        }
        private void InputNumberEnter(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.Enter)
            {
                e.Handled = true;
                ProcessButton_Click(sender, e);
            }

            if (e.KeyCode == Keys.Delete)
            {
                e.Handled = true;
                InputNumber.Text = "";
                StatusEvents.Text = "waiting for input.";
                StatusEvents.ForeColor = System.Drawing.Color.Black;
            }
        }
        private bool isPrime(BigInteger n, ref BigInteger divisor)
        {
            if (n <= 1)
            {
                return false;
            }
            for (BigInteger i = 2; i*i <= n; i++)
            {
                if (n % i == 0)
                {
                    divisor = i;
                    return false;
                }
            }
            return true;
        }

        private void ResetButton_Click(object sender, EventArgs e)
        {
            InputNumber.Text = "";
            StatusEvents.Text = "waiting for input.";
            StatusEvents.ForeColor = System.Drawing.Color.Black;
        }
    }
}
