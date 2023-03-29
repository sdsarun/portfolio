using System.Drawing;

namespace isPrimes
{
    partial class MainForms
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(MainForms));
            this.IsPrimesTitle = new System.Windows.Forms.Label();
            this.InputNumber = new System.Windows.Forms.TextBox();
            this.ProcessButton = new System.Windows.Forms.Button();
            this.Logo = new System.Windows.Forms.PictureBox();
            this.StatusLabel = new System.Windows.Forms.Label();
            this.StatusEvents = new System.Windows.Forms.Label();
            this.InputLabel = new System.Windows.Forms.Label();
            this.InfoOfPrimeIsits = new System.Windows.Forms.Label();
            this.panel1 = new System.Windows.Forms.Panel();
            this.label1 = new System.Windows.Forms.Label();
            this.ClearInput = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.Logo)).BeginInit();
            this.panel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // IsPrimesTitle
            // 
            this.IsPrimesTitle.AutoSize = true;
            this.IsPrimesTitle.Font = new System.Drawing.Font("Century Gothic", 27.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.IsPrimesTitle.Location = new System.Drawing.Point(105, 23);
            this.IsPrimesTitle.Name = "IsPrimesTitle";
            this.IsPrimesTitle.Size = new System.Drawing.Size(193, 44);
            this.IsPrimesTitle.TabIndex = 0;
            this.IsPrimesTitle.Text = "IsPrimes ?";
            // 
            // InputNumber
            // 
            this.InputNumber.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.InputNumber.Font = new System.Drawing.Font("Segoe UI", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.InputNumber.Location = new System.Drawing.Point(66, 190);
            this.InputNumber.Name = "InputNumber";
            this.InputNumber.Size = new System.Drawing.Size(261, 32);
            this.InputNumber.TabIndex = 1;
            this.InputNumber.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            this.InputNumber.KeyDown += new System.Windows.Forms.KeyEventHandler(this.InputNumberEnter);
            // 
            // ProcessButton
            // 
            this.ProcessButton.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(120)))), ((int)(((byte)(255)))));
            this.ProcessButton.FlatAppearance.BorderSize = 0;
            this.ProcessButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.ProcessButton.Font = new System.Drawing.Font("Century Gothic", 11.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.ProcessButton.ForeColor = System.Drawing.Color.WhiteSmoke;
            this.ProcessButton.Location = new System.Drawing.Point(130, 316);
            this.ProcessButton.Name = "ProcessButton";
            this.ProcessButton.Size = new System.Drawing.Size(175, 39);
            this.ProcessButton.TabIndex = 2;
            this.ProcessButton.Text = "Calculate";
            this.ProcessButton.UseVisualStyleBackColor = false;
            this.ProcessButton.Click += new System.EventHandler(this.ProcessButton_Click);
            // 
            // Logo
            // 
            this.Logo.Image = ((System.Drawing.Image)(resources.GetObject("Logo.Image")));
            this.Logo.Location = new System.Drawing.Point(50, 23);
            this.Logo.Name = "Logo";
            this.Logo.Size = new System.Drawing.Size(49, 47);
            this.Logo.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.Logo.TabIndex = 3;
            this.Logo.TabStop = false;
            // 
            // StatusLabel
            // 
            this.StatusLabel.AutoSize = true;
            this.StatusLabel.Font = new System.Drawing.Font("Century Gothic", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.StatusLabel.ForeColor = System.Drawing.Color.Black;
            this.StatusLabel.Location = new System.Drawing.Point(54, 235);
            this.StatusLabel.Name = "StatusLabel";
            this.StatusLabel.Size = new System.Drawing.Size(53, 16);
            this.StatusLabel.TabIndex = 4;
            this.StatusLabel.Text = "Status :";
            // 
            // StatusEvents
            // 
            this.StatusEvents.AutoSize = true;
            this.StatusEvents.Font = new System.Drawing.Font("Century Gothic", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.StatusEvents.ForeColor = System.Drawing.Color.Black;
            this.StatusEvents.Location = new System.Drawing.Point(105, 235);
            this.StatusEvents.MaximumSize = new System.Drawing.Size(200, 0);
            this.StatusEvents.Name = "StatusEvents";
            this.StatusEvents.Size = new System.Drawing.Size(119, 17);
            this.StatusEvents.TabIndex = 5;
            this.StatusEvents.Text = "waiting for input.";
            // 
            // InputLabel
            // 
            this.InputLabel.AutoSize = true;
            this.InputLabel.Font = new System.Drawing.Font("Century Gothic", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.InputLabel.ForeColor = System.Drawing.Color.Black;
            this.InputLabel.Location = new System.Drawing.Point(12, 203);
            this.InputLabel.Name = "InputLabel";
            this.InputLabel.Size = new System.Drawing.Size(48, 16);
            this.InputLabel.TabIndex = 4;
            this.InputLabel.Text = "Input :";
            // 
            // InfoOfPrimeIsits
            // 
            this.InfoOfPrimeIsits.AutoSize = true;
            this.InfoOfPrimeIsits.Font = new System.Drawing.Font("Segoe UI Semibold", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.InfoOfPrimeIsits.Location = new System.Drawing.Point(72, 10);
            this.InfoOfPrimeIsits.Name = "InfoOfPrimeIsits";
            this.InfoOfPrimeIsits.Size = new System.Drawing.Size(157, 17);
            this.InfoOfPrimeIsits.TabIndex = 7;
            this.InfoOfPrimeIsits.Text = "What is Prime Number ?";
            // 
            // panel1
            // 
            this.panel1.BackColor = System.Drawing.SystemColors.ControlLight;
            this.panel1.Controls.Add(this.label1);
            this.panel1.Controls.Add(this.InfoOfPrimeIsits);
            this.panel1.ForeColor = System.Drawing.SystemColors.ControlText;
            this.panel1.Location = new System.Drawing.Point(33, 85);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(294, 84);
            this.panel1.TabIndex = 8;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(17, 40);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(266, 30);
            this.label1.TabIndex = 8;
            this.label1.Text = "are positive, non-zero numbers that have exactly \r\ntwo factors is 1 and itself, n" +
    "o more, no less.";
            this.label1.TextAlign = System.Drawing.ContentAlignment.BottomLeft;
            // 
            // ClearInput
            // 
            this.ClearInput.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(208)))), ((int)(((byte)(49)))), ((int)(((byte)(45)))));
            this.ClearInput.FlatAppearance.BorderSize = 0;
            this.ClearInput.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.ClearInput.Font = new System.Drawing.Font("Century Gothic", 11.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.ClearInput.ForeColor = System.Drawing.Color.WhiteSmoke;
            this.ClearInput.Location = new System.Drawing.Point(54, 316);
            this.ClearInput.Name = "ClearInput";
            this.ClearInput.Size = new System.Drawing.Size(62, 39);
            this.ClearInput.TabIndex = 2;
            this.ClearInput.Text = "Reset";
            this.ClearInput.UseVisualStyleBackColor = false;
            this.ClearInput.Click += new System.EventHandler(this.ResetButton_Click);
            // 
            // MainForms
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.Control;
            this.ClientSize = new System.Drawing.Size(360, 379);
            this.Controls.Add(this.StatusEvents);
            this.Controls.Add(this.InputLabel);
            this.Controls.Add(this.StatusLabel);
            this.Controls.Add(this.Logo);
            this.Controls.Add(this.ClearInput);
            this.Controls.Add(this.ProcessButton);
            this.Controls.Add(this.InputNumber);
            this.Controls.Add(this.IsPrimesTitle);
            this.Controls.Add(this.panel1);
            this.Cursor = System.Windows.Forms.Cursors.Default;
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "MainForms";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "IsPrimes";
            ((System.ComponentModel.ISupportInitialize)(this.Logo)).EndInit();
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label IsPrimesTitle;
        private System.Windows.Forms.TextBox InputNumber;
        private System.Windows.Forms.Button ProcessButton;
        private System.Windows.Forms.PictureBox Logo;
        private System.Windows.Forms.Label StatusLabel;
        private System.Windows.Forms.Label StatusEvents;
        private System.Windows.Forms.Label InputLabel;
        private System.Windows.Forms.Label InfoOfPrimeIsits;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button ClearInput;
    }
}

